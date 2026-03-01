import { Button, styled } from '@mui/material'
import React from 'react'

const styledButton = styled(Button)({
    
})

export default function MyButton({children, ...props}) {
  return (
    <Button {...props}>{children}</Button>
  )
}
