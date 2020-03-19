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
                <p>footer</p>
            </StyledFooter>

        </div>
    );
};



const StyledDarkHeader = styled.div`
    background-color: red;
`

const StyledContent = styled.div`
    margin-top: 45px;
`
const StyledFooter = styled.div`
    background-color: green;
`


export default Wrapper;