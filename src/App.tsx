import { useState } from 'react'
import words from './wordList.json'

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    const randomIndex = Math.floor(Math.random() * words.length)
    return words[randomIndex]
  })
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  return <h1>Hi</h1>
}

export default App
