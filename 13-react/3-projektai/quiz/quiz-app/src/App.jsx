import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { useState } from 'react';
import { useEffect } from 'react';
import { getData } from './utils/api';
import {Button, Container} from 'react-bootstrap'
import QuestionList from './components/QuestionList';


function App() {
  
  const [questions, setQuestions] = useState([])
  const [quizStarted, setQuizStarted] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(0)

        useEffect(() => {
            getData('/questions').then(response => setQuestions(response));
        }, []);


       const onStartButtonClick = () => {
        setQuizStarted(true)
       }


       const handleAnswerQuestion = () => {
          console.log('answer')
       }

       const handleNextQuestion = () => {
        if (currentQuestion === questions.length - 1) {
          setQuizStarted(false);
          return;
        }
      
        setCurrentQuestion(currentQuestion + 1);
      }


       return (
        <>
          <Container className="quiz-container text-center">
            <h1 className="quiz-title">GREEN NAME</h1>
            <h3 className="quiz-subtitle">Quiz app</h3>
            <p className="quiz-text">start test</p>
            {!quizStarted && (
              <Button className="start-button" onClick={onStartButtonClick}>
                Start
              </Button>
            )}
            {quizStarted && (
              <QuestionList
                questions={questions}
                current={currentQuestion}
                handleAnswerQuestion={handleAnswerQuestion}
                handleNextQuestion={handleNextQuestion}
              />
            )}
          </Container>
        </>
      );
}

export default App
