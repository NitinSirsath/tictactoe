import React, {useState} from 'react'
import Square from './Square'
import styled from 'styled-components'

const Wrapper  = styled.div`
 
`

const Board = ({board,handleSquare}) => {

  

    const renderSqaures = (position) => {
        return (
            <Square eventClick={() => handleSquare(position)} value={board[position]}/>  
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