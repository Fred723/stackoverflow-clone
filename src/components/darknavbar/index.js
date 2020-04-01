import React from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu';

function DarkNavbar() {
  return (
    <StyledToolbar>
      <StyledLi>
        <MenuIcon/>
      </StyledLi>
      <svg aria-hidden="true" className="svg-icon native iconLogoGlyphMd" width="32" height="37" viewBox="0 0 32 37">
            <path d="M26 33v-9h4v13H0V24h4v9h22z" fill="#BCBBBB"></path>
            <path d="M21.5 0l-2.7 2 9.9 13.3 2.7-2L21.5 0zM26 18.4L13.3 7.8l2.1-2.5 12.7 10.6-2.1 2.5zM9.1 15.2l15 7 1.4-3-15-7-1.4 3zm14 10.79l.68-2.95-16.1-3.35L7 23l16.1 2.99zM23 30H7v-3h16v3z" fill="#F48024"></path>
        </svg> 
      <StyledTextHeader>Stack Overflow</StyledTextHeader>

      <StyledDiv>
        <StyledLi>
          sign up
        </StyledLi>
        <StyledLi>
          log in
        </StyledLi>
      </StyledDiv>
    </StyledToolbar>
  )
}

const StyledToolbar = styled.ul`

  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  background-color: black;
  color: white;
  display: flex;
  items-align: center;
  padding: 0;
  margin: 0 auto;
`

const StyledLi = styled.li`
  padding: 10px 10px;
  display: flex;
  align-items: center;
  font-size: 11px;
`

const StyledDiv = styled.div`
  display: flex;
  margin-left: auto;
`

const StyledTextHeader = styled(StyledLi)`
  position: absolute;
  left: 35%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 11px;
  line-height: 44px;
  font-weight: bold;
`

export default DarkNavbar
