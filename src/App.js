import './App.css'
import './styles/weatherNavbar.css'
import './styles/global.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import WeatherNavbar from './components/WeatherNavbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import HomePage from './components/HomePage'
import { useState } from 'react'
import SearchWeather from './components/SearchWeather'

const App = () => {
  const [searchResult, setSearchResult] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const getResults = (city) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6b201a38c300d1fcbbc71de9f70fe57a`
    )
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error('Errore nella ricerca')
        }
      })
      .then((data) => {
        console.log(data)
        setSearchResult(data)
        setLoading(false)
        setError(false)
      })
      .catch((err) => console.log(err))
  }

  return (
    <BrowserRouter>
      <WeatherNavbar onSearch={getResults} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/favourites"
          element={
            <div>
              <h1>FAVOURITES</h1>
            </div>
          }
        />
      </Routes>
      <SearchWeather result={searchResult} loading={loading} error={error} />
    </BrowserRouter>
  )
}

export default App
