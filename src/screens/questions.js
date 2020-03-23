import React from 'react';
import Wrapper from '../components/wrapper'
import Toolbar from '../components/toolbar/index'
import Vote from '../components/vote/index'
import QuestionSummary from '../components/questionsummary/index'
import FooterQuestion from '../components/footerquestion/index'
import Asked from '../components/authorasked/index'
import Edited from '../components/authoredited/index'
import styled from 'styled-components';

const questions = () => {
    return (
        <Wrapper>
        <div>
            <Toolbar>
            </Toolbar>

            <HeadQuestion>
                <Vote></Vote>
                <QuestionSummary></QuestionSummary>
            </HeadQuestion>

            I'm working on a project in React and ran into a problem that has me stumped.

            Whenever I run <code>yarn start</code> I get this error:
            <blockquote>
                <StyledQuote>

                    TypeError [ERR_INVALID_ARG_TYPE]: The "path" argument must be of type string. Received type undefined
                </StyledQuote>

            </blockquote>

            I have no idea why this is happening, if anyone has experienced this I would be grateful.
            <FooterQuestion>
            </FooterQuestion>
            <Asked>
            </Asked>
            <Edited></Edited>
        
        </div>

        </Wrapper>
    );
};

const HeadQuestion = styled.div`
    display: flex;
    padding : 10px 0;
    border-top: 1px solid #eff0f1;
    border-bottom: 1px solid #eff0f1;
    
`
const StyledQuote = styled.div`
    background-color :#ffeea9;
    border-left : #ffcf10 solid;
    padding 0px 10px;

`




export default questions;