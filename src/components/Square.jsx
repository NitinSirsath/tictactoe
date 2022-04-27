import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
    padding: 10px;
`

const Square = ({value, eventClick}) => {
  return (
    <>
    <Button onClick={eventClick}>{value}</Button>
    </>
  )
}

export default Square