import React from 'react'
import Square from './Square'
import styled from 'styled-components'

const Wrapper  = styled.div`
 
`

const Board = () => {
  return (
    <>
      <Wrapper>
      <div>
       <Square value={0}/>  
       <Square value={1}/>  
       <Square value={2}/>  
       </div>
       <div>
       <Square value={3}/>  
       <Square value={4}/>  
       <Square value={5}/>  
       </div>
       <div>
       <Square value={6}/>  
       <Square value={7}/>  
       <Square value={8}/>  
       </div>
      </Wrapper>
    </>
  )
}

export default Board