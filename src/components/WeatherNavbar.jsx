import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap'

import { Link, useLocation } from 'react-router-dom'
import '../styles/weatherNavbar.css'
const WeatherNavbar = () => {
  const location = useLocation()
  return (
    <Navbar expand="lg" className="bg-info">
      <Container fluid>
        <Navbar.Brand>
          <img
            src="https://www.vectorkhazana.com/assets/images/products/rainbow_bundle_svg,rainbow_svg,rainbow_clipart,cloud_svg,clouds_Sun.png"
            alt="sun and rainbow logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0">
            <Link
              to="/"
              className={
                location.pathname === '/' ? 'nav-link active' : 'nav-link'
              }
            >
              <div>Home</div>
            </Link>
            <Link
              to="/favourites"
              className={
                location.pathname === '/favourites'
                  ? 'nav-link active'
                  : 'nav-link'
              }
            >
              <div>Favourites</div>
            </Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default WeatherNavbar
