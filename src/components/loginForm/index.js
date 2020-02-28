import React, { useState } from 'react'
import styled from 'styled-components'
import Wrapper from '../wrapper'

function LoginForm({ title, onConfirm }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const onUsernameChange = e => {
    setUsername(e.target.value)
  }

  const onPasswordChange = e => {
    setPassword(e.target.value)
  }

  const login = e => {
    e.preventDefault()
    onConfirm(username, password)
  }

  const reset = e => {
    e.preventDefault()
    setUsername('')
    setPassword('')
  }

  return (
      <Wrapper>
           <LoginFormContainer>
        
        <svg aria-hidden="true" class="svg-icon native iconLogoGlyphMd" width="32" height="37" viewBox="0 0 32 37">
            <path d="M26 33v-9h4v13H0V24h4v9h22z" fill="#BCBBBB"></path>
            <path d="M21.5 0l-2.7 2 9.9 13.3 2.7-2L21.5 0zM26 18.4L13.3 7.8l2.1-2.5 12.7 10.6-2.1 2.5zM9.1 15.2l15 7 1.4-3-15-7-1.4 3zm14 10.79l.68-2.95-16.1-3.35L7 23l16.1 2.99zM23 30H7v-3h16v3z" fill="#F48024"></path>
        </svg> 
                    
      <StyledHeader>{title}</StyledHeader>
      <StyledInput
        placeholder='Username'
        type='text'
        value={username}
        onChange={onUsernameChange}
      />
      <StyledInput
        placeholder='Password'
        type='password'
        value={password}
        onChange={onPasswordChange}
      />
      <PrimaryStyledButton onClick={login}>Log in</PrimaryStyledButton>
      <SecondaryStyledButton onClick={reset}>Reset</SecondaryStyledButton>
    </LoginFormContainer>
      </Wrapper>
   
  )
}

const LoginFormContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
/*
const StyledImage = styled.img`
  position: fixed;
  top: 0;
  left: 0;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100%;
  background-color: white;
  filter: brightness(50%);
  z-index: -1;
`
*/
const StyledInput = styled.input`
  color: white;
  font-size: 15px;
  padding: 10px 30px;
  border-radius: 3px;
  border: 1px solid black;
  margin: 5px 0;
  outline: 0;
  background-color: black;
  opacity: 80%;
`

const StyledButton = styled.button`
  font-size: 16px;
  width: 200px;
  padding: 10px 20px;
  border-radius: 3px;
  border: 1px solid lightgray;
  margin: 2px 0;
  outline: 0;
  cursor: pointer;
  :hover {
    transition-property: width;
    transition-duration: 0.5s;
    width: 220px;
  }
`

const PrimaryStyledButton = styled(StyledButton)`
  background-color: #19667b;
  border-color: #19667b;
  color: white;
`

const SecondaryStyledButton = styled(StyledButton)`
  background-color: white;
  border-color: #DDD;
  color: #333;
`
const StyledHeader = styled.h2`
  color: #333;
  text-align: center;
`

export default LoginForm
