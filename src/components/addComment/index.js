import React from 'react';
import styled from 'styled-components';

const AddComment = () => {
    return (
        <div>
            <AddCommentBox>
            add a comment
            </AddCommentBox>
        </div>
    );
};

const AddCommentBox = styled.div`

text-align: center;
font-size: 15px;
padding: 11px;
color: #07C;
background-color: #eff0f1;
border-bottom: 1px solid #d6d9dc;

`

export default AddComment;