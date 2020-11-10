import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Navbar,
  Nav
} from 'react-bootstrap'

const nav = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
         Fast Quiz
        </Navbar.Brand>
        <Nav.Link href="#highscores">High Scores
        </Nav.Link>
      </Navbar>
    </>
  )
}

export default nav