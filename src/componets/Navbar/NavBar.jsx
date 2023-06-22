import logo from "../../imagenes/logo.png";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { useState } from "react";
import "./NavBar.css";

function NavBar() {
  const [expanded, setExpanded] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <Navbar expand="lg" expanded={expanded} className="navbar-dark bg-dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="logo" className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/Voil" className="text-yellow">Voli</Nav.Link>
            <Nav.Link as={Link} to="/hotel" className="text-yellow">Hotel</Nav.Link>
            <NavDropdown
              title="Visti d'ingresso"
              id="basic-nav-dropdown"
              className="text-yellow"
              show={showMenu}
              onMouseEnter={() => setShowMenu(true)}
              onMouseLeave={() => setShowMenu(false)}
            >
              <NavDropdown.Item as={Link} to="/Ottomento">
                OTTENIMENTO VISTO PER CITTADINI EXTRACOMUNITARI
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/assicurazione">
                Assicurazione di viaggio per turismo/visto d’ingresso
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/dichiarazione">
                DICHIARAZIONE DI OSPITALITÀ PER EXTRACOMUNITARI
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/vistoturistico">
                Visto Turistico per l’invito dei cittadini extracomunitari in Italia
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/taxi" className="text-yellow">Taxi da / per l'aeroporto</Nav.Link>
            <Nav.Link as={Link} to="/traduzione" className="text-yellow">Traduzione e Legalizzazione</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
