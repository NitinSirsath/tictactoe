import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
    padding: 10px;
`

const Square = ({value, onClick}) => {
  return (
    <>
    <Button onClick={onClick}>{value}</Button>
    </>
  )
}

export default Square