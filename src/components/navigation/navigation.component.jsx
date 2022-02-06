import React from "react";
import './navigation.styles.css';
import {Button, Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import Logo from "../../logo.svg";

export const NavigationComponent = () => {
    return (<Navbar variant="dark" expand="lg" fixed="top" id="navbar">
        <Container fluid className="mx-5 my-2 py-3">
            <Navbar.Brand href="#">
                <img src={Logo} width="180" alt="Bep-20"/>
            </Navbar.Brand>
            <Navbar.Toggle onClick={navbarClick} aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-5 ms-5 px-5 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Nav.Link href="#trade" className="mx-4 header-nav-item">Trade</Nav.Link>
                    <Nav.Link href="#developers" className="mx-4 header-nav-item">Developers</Nav.Link>
                    <Nav.Link href="#about" className="mx-4 header-nav-item">About</Nav.Link>
                    <Nav.Link href="#insights" className="mx-4 header-nav-item">Insights</Nav.Link>
                </Nav>
                <Nav
                    className="my-4 ms-5 px-2 my-lg-0 d-flex align-items-center"
                    style={{ maxHeight: '140px' }}
                    navbarScroll
                >
                    <Button className="header-button btn-warning">
                        <p className="m-0 mx-3">Join Us</p>
                    </Button>
                    <NavDropdown title="EN" id="basic-nav-dropdown" align="end" className="ms-3">
                        <NavDropdown.Item href="#action/3.1">ES</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">RU</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>)
}

window.onscroll = function () {
    let pageOffset
    let navbar = document.getElementById('navbar')
    let navHeight = document.getElementById('navbar').offsetHeight
    if (window.pageYOffset > navHeight) {
        navbar.classList.add('sticky')
    } else {
        navbar.classList.remove('sticky')
    }
}

function navbarClick () {
    let navbar = document.getElementById('navbar')
    let navHeight = document.getElementById('navbar').offsetHeight
    if (navHeight > window.pageYOffset) {
        navbar.classList.toggle('sticky')
    }
}