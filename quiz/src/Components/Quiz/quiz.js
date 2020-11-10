import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Container,
  Row,
  Col
} from 'react-bootstrap'


const quiz = () => {
  return (
  
      <Container>
        <Row>
          <Col>
            <h4 className="display-4 text-center">Test your Fast and Furious knowledge!</h4>
            <p>Get ready to test how much you know about the Fast Saga! This is a timed quiz and there are 5 questions you have to answer.  If you get a question wrong 5 seconds will be deducted from your timer. Try it with your peers and see who can get the highest score! Remember, "It doesn't matter whether you win by an inch or a mile, winning is winning" - Dominic Toretto</p>
            <br />
              <button type="button" id="start" className="btn btn-outline-primary">Start Quiz!</button>
        </Col>
      </Row>
    </Container>
    
  )
}

export default quiz