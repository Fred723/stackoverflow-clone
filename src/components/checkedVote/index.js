import React from 'react';
import CheckIcon from '@material-ui/icons/Check';
import styled from 'styled-components';

import Counter from '../counter';


const checkedVote = () => {
    return (
        <div>
        <StyledVote>
            <StyledCompteur>
               <Counter></Counter>
            <IconBox>
                <CheckIcon/>
            </IconBox>
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

const IconBox = styled.div`
    color: #45A163;
`


const StyledCompteur = styled.span`
text-align: center;

`

export default checkedVote;