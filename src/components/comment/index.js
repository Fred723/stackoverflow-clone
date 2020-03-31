import React from 'react';
import styled from 'styled-components';

const comment = () => {
    return (
        <div>
            <StyledComment>
                <CommentText>
                    In id quis mollit irure duis pariatur. Culpa incididunt dolor Lorem cillum id aute ea sunt cillum consectetur ex et id duis. Commodo mollit eiusmod culpa commodo ut ea anim laboris. Exercitation sit qui ipsum consequat laborum eiusmod commodo adipisicing enim fugiat commodo Lorem ex fugiat. Aliquip in et ullamco Lorem. Minim exercitation esse incididunt laborum qui laboris consectetur cupidatat laborum dolore voluptate dolore esse id.
                </CommentText>
                    -
                <CommentAuthorBox>
                    <CommentAuthor>
                     Aliqua tempor
                    </CommentAuthor>
                    irure mollit sit magna exercitation eu.
                </CommentAuthorBox>
            </StyledComment>
        </div>
    );
};

const StyledComment = styled.div`
display : flex;
flex-direction: column;
`



const CommentAuthorBox = styled.div`
    color= blue;
`
const CommentAuthor = styled.div`
    font-weight : bold;
`
const CommentText = styled.div`
    
`

export default comment;