import { useState } from "react"
import { Container, Card, Button, Row, Col} from "react-bootstrap"

const QuestionList = ({ questions, current, handleAnswerQuestion, handleNextQuestion }) => {
  const [selectedOption, setSelectedOption] = useState(null)
  const optionsIds = ['a', 'b', 'c', 'd']
  const currentQuestion = questions[current]

  if (!currentQuestion || !currentQuestion.options) return null;

  return (
    <Container>
      <p>Time remaining</p>

      <Card className="p-4 my-3">
        <Card.Title><h3>{currentQuestion.question}</h3></Card.Title>

        {currentQuestion.options.map((option, index) => (
          <Button
            key={option.id}
            className="d-block my-2"
            variant={selectedOption === index ? "success" : "outline-primary"}
            onClick={() => {
              setSelectedOption(index)
              handleAnswerQuestion(option)
            }}
          >
            {optionsIds[index]}. {option.value}
          </Button>
        ))}

        <Row className="mt-3 align-items-center">
        <Col className="text-start">
            <span>
            Question {current + 1} of {questions.length}
            </span>
        </Col>
        <Col className="text-end">
            <Button onClick={handleNextQuestion}>
            Next Question
            </Button>
        </Col>
        </Row>
      </Card>
    </Container>
  )
}

export default QuestionList
