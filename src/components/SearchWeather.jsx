import { Card, Spinner, Alert } from 'react-bootstrap'

const SearchWeather = (result, loading, error) => {
  //   const weatherHomepage = (props) => {
  //     fetch(
  //       'https://api.openweathermap.org/data/2.5/forecast/hourly?q={city name}&appid={API key}'
  //     )
  //       .then((res) => {
  //         if (res.ok) {
  //           return res.json()
  //         } else {
  //           throw new Error("Errore all'avvio")
  //         }
  //       })
  //       .then((data) => {
  //         console.log(data)
  //         setWeather(data)
  //         setLoading(false)
  //       })
  //       .catch((err) => {
  //         console.log('OH NO!', err)
  //         setError(true)
  //       })
  //   }

  //   useEffect(() => {
  //     weatherHomepage()
  //   }, [])

  return (
    <Card>
      <Card.Body>
        {loading && (
          <div className="d-flex justify-content-center">
            <Spinner animation="border" role="status" variant="info" />
          </div>
        )}
        {error && <Alert variant="danger">Errore</Alert>}
        {!error && !loading && (
          <>
            <Card.Title>
              Today in {result.weather.name} ({result.weather.sys.country}){' '}
              <i class="bi bi-heart"></i>
            </Card.Title>
            <Card.Text>{result.weather.weather[0].main}</Card.Text>
            <Card.Text>({result.weather.weather[0].description})</Card.Text>
          </>
        )}
      </Card.Body>
    </Card>
  )
}

export default SearchWeather
