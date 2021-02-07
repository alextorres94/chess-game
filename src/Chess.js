import { useEffect, useState } from 'react'
import './Chess.css'

import { CHESSBOARD, STATUS, BOXES, ONE_POINT } from './constants'

const Chess = () => {
  const [randomNumber, setRandomNumber] = useState()
  const [status, setStatus] = useState()
  const [score, setScore] = useState(0)

  useEffect(() => {
    getRandomNumber()
  },[])

  const getRandomNumber = () => {
    const random = Math.floor(Math.random() * BOXES.length)
    setRandomNumber(BOXES[random])
  }

  const check = (box) => {
    const correctBox = box === randomNumber
    if (correctBox) {
      setScore(score + ONE_POINT)
      setStatus(STATUS.WIN)
      getRandomNumber()
      return
    }

    setStatus(STATUS.FAIL)
    setScore(score - ONE_POINT)
    getRandomNumber()
  }

  return (
    <div className="app">
      <h1>To search: {randomNumber}</h1>
      <h2>The score: {score}</h2>
      <div className="chessboard" aria-label="Chessboard">
        { CHESSBOARD.map((box, key) => {
          return (
            <button
              key={key}
              aria-label={box.key}
              onClick={() => check(box.key)}
              className={`chessboard__box--${box.color}`}>
                {box.text}
            </button>
          )
        })
        }
      </div>
      { status === STATUS.WIN &&
        <h1 className="chessboard__status--win">Win!!!</h1>
      }
      { status ===STATUS.FAIL &&
        <h1 className="chessboard__status--fail">Fail!!!</h1>
      }
    </div>
  )
}

export { Chess }
