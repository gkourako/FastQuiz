import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Container,
  Row,
  Col,
  Card,
  ListGroup
} from 'react-bootstrap'

const questions = [
  {
    questionText: 'What car did Brian drive in Fast and Furious?',
    answerOptions: [
      { answerText: "Blue R34", isCorrect: true },
      { answerText: "Yellow Supra", isCorrect: false },
      { answerText: "Black Durango", isCorrect: false },
      { answerText: "Silver R34", isCorrect: false }
    ]
  },
  {
    questionText: "What is Dom and Letty's famous saying ",
    answerOptions: [
      { answerText: "I live life a quarter mile at a time", isCorrect: false },
      { answerText: "Ride or Die", isCorrect: true },
      { answerText: "It doesn't matter whether you win by an inch or a mile, winning is winning", isCorrect: false },
      { answerText: "You know this ain't no 10-second race.” “I've got nothing but time.", isCorrect: false }
    ]
  },
  {
    questionText: "In Toyko Drift who says, Life's simple: You make choices and you don't look back.",
    answerOptions: [
      { answerText: "Drift King", isCorrect: false },
      { answerText: "Sean", isCorrect: false },
      { answerText: "D.K.", isCorrect: false },
      { answerText: "Han", isCorrect: true }
    ]
  },
  {
    questionText: "Which movie does Dom look at Letty and say, Ride or die, Remember?",
    answerOptions: [
      { answerText: "2 Fast 2 Furious", isCorrect: false },
      { answerText: "Fast 6", isCorrect: true },
      { answerText: "Fate of the Furious", isCorrect: false },
      { answerText: "The Fast and Furious", isCorrect: false }
    ]
  },
  {
    questionText: "What is Paul Walkers most famous quote?",
    answerOptions: [
      { answerText: "If one day the speed kills me don’t be sad because I will have died smiling.", isCorrect: true },
      { answerText: "I don’t care what it is in life: listen to your heart. If you do, no matter what, you win.", isCorrect: false },
      { answerText: "I’m not the kind of guy who’s taking advantage of my position.", isCorrect: false },
      { answerText: "You know, all that really matters is that the people you love are happy and healthy. Everything else is just sprinkles on the sundae.", isCorrect: false },
    ]
  }
]
const quiz = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Card style={{ width: '18rem' }}>
            <ListGroup variant="flush">
              <ListGroup.Item>Cras justo odio</ListGroup.Item>
              <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>

  )
}

export default quiz 