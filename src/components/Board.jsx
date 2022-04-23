import React, {useState} from 'react'
import Square from './Square'
import styled from 'styled-components'

const Wrapper  = styled.div`
 
`

const Board = () => {

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

    const renderSqaures = (position) => {
        return (
            <Square onClick={() => handleSquare(position)} value={board[position]}/>  
        )
    }

  return (
    <>
      <Wrapper>
      <div>
       {renderSqaures(0)} 
       {renderSqaures(1)} 
       {renderSqaures(2)} 
      
       </div>
       <div>
       {renderSqaures(3)} 
       {renderSqaures(4)} 
       {renderSqaures(5)} 
        
       </div>
       <div>
       {renderSqaures(6)} 
       {renderSqaures(7)} 
       {renderSqaures(8)} 
       </div>
      </Wrapper>
    </>
  )
}

export default Board