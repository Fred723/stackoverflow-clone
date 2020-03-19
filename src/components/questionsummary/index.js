import React from 'react';
import styled from 'styled-components';

const QuestionSummary = () => {
    return (
        <div>
            <StlyedQuestionBox>

                <StlyedQuestion>
                TypeError [ERR_INVALID_ARG_TYPE]: The "path" argument must be of type string. 
                Received type undefined raised when starting react app
                </StlyedQuestion>
                <StyledTags>
                    <StyledTag>
                        javascript
                    </StyledTag>    
                    <StyledTag>
                        reactjs
                    </StyledTag>    
                    <StyledTag>
                        redux
                    </StyledTag>    
                    <StyledTag>
                        visual-studio-code
                    </StyledTag>    
                    <StyledTag>
                        yarnpkg
                    </StyledTag>    
                </StyledTags>

            </StlyedQuestionBox>
        </div> 
    );
};


const StlyedQuestion = styled.div`

`
const StyledTags = styled.div`
    display: flex;
    justify-content: space-between;
 
`
const StyledTag = styled.p`
    color: #39739d;
    padding: 3px 5px;
    font-size: 11px;
    background-color: #e1ecf4;
`

const StlyedQuestionBox = styled.div`

    padding: 0 10px;

`

export default QuestionSummary;