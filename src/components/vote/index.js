import React from 'react';
import styled from 'styled-components';




import Counter from '../counter';



const Vote = () => {
    return (
        <div>
            <StyledVote>
                <StyledCompteur>
                   <Counter></Counter>
                </StyledCompteur>
            </StyledVote>
        </div>
    );
};

const StyledVote = styled.div`
background-color : #d6d9dc;

display: flex;
flex-direction : column;

`

const StyledCompteur = styled.span`
    /*padding: 40px;*/
    text-align: center;

`

export default Vote;