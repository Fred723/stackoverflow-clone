import React from 'react';
import styled from 'styled-components';

const footerquestion = () => {
    return (
        <div>
            <StyledFooter>
                <StyledP>
                    follow
                </StyledP>
                <StyledP>
                    share
                </StyledP>
                <StyledP>
                improve this question
                </StyledP>
            </StyledFooter>
        </div>
    );
};

const StyledFooter = styled.div`
    display: flex;
    border-top: 1px solid #eff0f1;
    justify-content: normal;

`
const StyledP = styled.p`
    font-size: 11px;
    padding: 0 10px;
    color: #6a737c;

`

export default footerquestion;