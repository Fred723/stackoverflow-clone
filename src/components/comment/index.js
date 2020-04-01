import React from 'react';
import styled from 'styled-components';

const comment = () => {
    return (
        <div>
            <StyledComment>
                <NumberBox>
                    <Number>
                        9
                    </Number>
                </NumberBox>
                <TextBox>
                    <CommentText>
                        In id quis mollit irure duis pariatur. Culpa incididunt dolor Lorem cillum id aute ea sunt cillum consectetur ex et id duis.
                        -
                        <CommentAuthor>
                        Aliqua tempor
                        </CommentAuthor>
                    </CommentText>
                    <CommentAuthorLog>
                    Feb 16 at 11:07
                    </CommentAuthorLog>
                </TextBox>
            </StyledComment>
        </div>
    );
};

const StyledComment = styled.div`
display : flex;

`
const NumberBox = styled.div`
background-color: #eff0f1;
width: 60px;

`
const Number = styled.div`
    padding: 12px;
    background-color: rgba(0,0,0,0.02);
    color : #77808F;
`
const TextBox = styled.div`

`


const CommentAuthorLog = styled.span`
color: #07C;
`
const CommentAuthor = styled.span`
color: #07C;
font-weight : bold;
padding : 0 5px;
`
const CommentText = styled.span`
    margin:0;
    color : #686C6E;
`
    
    export default comment;