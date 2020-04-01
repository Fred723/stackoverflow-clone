import React from 'react';
import styled from 'styled-components';
import StarBorderIcon from '@material-ui/icons/StarBorder';



import Counter from '../counter';



const Vote = () => {
    return (
        <div>
            <StyledVote>
                <StyledCompteur>
                   <Counter></Counter>
                <StarBorderIcon/>
                </StyledCompteur>
            </StyledVote>
        </div>
    );
};

const StyledVote = styled.div`
background-color : #d6d9dc;
min-width: 60px;
height: 100%;
display: flex;
flex-direction : column;

`

const StyledCompteur = styled.span`
    text-align: center;

`

export default Vote;