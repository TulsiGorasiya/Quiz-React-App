import { useEffect } from 'react'

import { useQuiz } from '../context/QuizContext'
import { ScreenTypes } from '../types'
import { shuffleArray } from '../utils/helpers'

export const useShuffleQuestions = () => {
  const { setQuestions, currentScreen, questions } = useQuiz()

  useEffect(() => {
    console.log(currentScreen, setQuestions, 'ejbkjvbjbkj')
    if (currentScreen === ScreenTypes.QuizDetailsScreen) {
      setQuestions(shuffleArray(questions))
    }
  }, [currentScreen])
}

export default useShuffleQuestions
