import { useEffect } from "react"
import useWordle from "../hooks/useWordle"
import Grid from "./Grid"

const Wordle = ({solution}) => {
    const {currentGuess, handleKeyUp, turn, guesses, isCorrect} = useWordle(solution)

    useEffect(() => {
        window.addEventListener('keyup', handleKeyUp)

        return () => window.removeEventListener(
            'keyup',
            handleKeyUp
        )
    }, [handleKeyUp])

    useEffect(() => {
        console.log(guesses, turn, isCorrect)
    }, [guesses, turn, isCorrect])
    return (
        <>

            <h3>
            current guess --- {currentGuess}
            </h3>
            <Grid 
            currentGuess={currentGuess} 
            guesses={guesses}
            turn={turn}/>
        </>
    )
}

export default Wordle