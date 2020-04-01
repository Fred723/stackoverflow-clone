import React from 'react';
import styled from 'styled-components'

//class current = use state if on clique sur question on change le background color

const toolbar = () => {
    return (
        <div>
            <StyledToolBar>
                    <StyledLiCurrent>
                        Questions
                    </StyledLiCurrent>
                    <StyledLi>
                    Jobs
                    </StyledLi>
                    <StyledLi>
                        Users
                    </StyledLi>
                    <StyledLi>
                    Badges
                    </StyledLi>
                    <StyledLi>
                    Ask
                    </StyledLi>
            </StyledToolBar>
        </div>
    );
};

const StyledToolBar = styled.ul`
    display: flex;
    color: #6a737c;
    justify-content: space-evenly;
    padding: 0px;
    font-size: 11px;
    margin-left: auto;
    margin-right: auto; 
    width: 25em;
`

const StyledLi = styled.li`
  padding: 10px 10px;
  display: flex;
  align-items: center;
`


const StyledLiCurrent = styled.li`
  padding: 10px 10px;
  display: flex;
  background-color: #F48024;
  align-items: center;
`
export default toolbar;