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
    <Navbar bg="dark" expand="lg" expanded={expanded} className="navbar-dark bg-yellow">

      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="logo" className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(expanded ? false : "expanded")}
        />
        <Navbar.Collapse
          id="basic-navbar-nav"
          onToggle={() => setExpanded(false)}
        >
          <Nav className="me-auto">
            
            <Nav.Link href="/Voil" className="text-yellow">Voli</Nav.Link>
<Nav.Link href="/hotel" className="text-yellow">Hotel</Nav.Link>
<NavDropdown
               title={<span style={{ color: "rgb(250, 197, 21)" }}>Visti d'ingresso</span>}
              id="basic-nav-dropdown"
              className="text-yellow"
              style={{ color: "yellow" }}
              show={showMenu}
              onMouseOver={() => setShowMenu(true)}
              onMouseOut={() => setShowMenu(false)}
              onClick={(e) => e.preventDefault()}
             
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
<Nav.Link href="/taxi" className="text-yellow">Taxi da / per l'aeroporto</Nav.Link>
<Nav.Link href="/traduzione" className="text-yellow">Traduzione e Legalizzazione</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
