import React from 'react';
import DarkNavbar from '../darknavbar/index'
import styled from 'styled-components'

const Wrapper = ({children}) => {
    return (
        <div>
            <StyledDarkHeader>
                <DarkNavbar></DarkNavbar>
            </StyledDarkHeader>
            
            <StyledContent>
                {children}

            </StyledContent>
            <StyledFooter>
                <FootNavbar>
                    <StyledLi>
                        meta
                    </StyledLi>    
                    <StyledLi>
                        chat
                    </StyledLi>    
                    <StyledLi>
                        tour
                    </StyledLi>    
                    <StyledLi>
                        help
                    </StyledLi>    
                    <StyledLi>
                        blog
                    </StyledLi>    
                    <StyledLi>
                        privacy policy
                    </StyledLi>    
                    <StyledLi>
                        legal
                    </StyledLi>    
                    <StyledLi>
                        contact us
                    </StyledLi>    
                    <StyledLi>
                        full site
                    </StyledLi>    
                </FootNavbar>
                <Credits>
                2020 Stack Exchange, Inc. user contributions under <Linked>cc by-sa 4.0.</Linked>     
                </Credits>  
            </StyledFooter>

        </div>
    );
};



const StyledDarkHeader = styled.div`
    background-color: red;
`
const Credits = styled.div`
    text-align: center
`
const Linked = styled.span`
    color:#99d4ff;
`

const StyledContent = styled.div`
    margin-top: 45px;
`
const StyledFooter = styled.div`
    
  end: 0;
  width: 100%;
  background-color: black;
  color: #6a737c;
  font-size: 11px;
  padding-bottom: 15px;
  `
  
  const FootNavbar = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 15px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

`


const StyledLi = styled.span`
color : #99d4ff;

`

export default Wrapper;