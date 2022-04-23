import React , { useState } from 'react'
import Board from './components/Board'

const App = () => {

  const [board, setBoard] = useState(Array(9).fill(null))
  const [isX, setIsX] = useState(false)
  

  const handleSquare = (position) => {
      if(board[position]){
          return
      }
      setBoard((preVal)=> {
         return preVal.map((square, idx)=> {
              if(idx === position){
                  return isX ? 'O' : 'X'
              }
              return square
          })
      } )
      setIsX((preVal) => !preVal)
  }
  return (
    <div>
      <h1>TIC TAC TOE</h1>
      <Board
      board={board} 
      isX={isX}
      setIsX={setIsX}
      handleSquare={handleSquare}
      />
      
    </div>
  )
}

export default App