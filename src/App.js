import './App.css'
import WeatherNavbar from './components/WeatherNavbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import HomePage from './components/HomePage'

function App() {
  return (
    <BrowserRouter>
      <WeatherNavbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
