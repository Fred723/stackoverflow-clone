import React from 'react';
import styled from 'styled-components';
import AvatarAnswered from '../avatarAnswered/index'
import Badge from '../point/index'

const auhoraswered = ({ image }) => {
    return (
        <div>
            <AuthorContainer>
                <AuthorBox>
                    <AvatarContainer>
                        <AvatarAnswered size={50} src={image} />
                    </AvatarContainer>
                    <AuthorNameBox>
                        <AuthorName>
                        EngrEric
                        </AuthorName>
                        <Score>
                            <Point>
                                1,236
                            </Point>
                            <Frst>
                                <Badge></Badge>
                            1
                            </Frst>
                            <Scnd>
                            <Badge></Badge>4
                            </Scnd>
                        </Score>

                    </AuthorNameBox>


                </AuthorBox>
                <AuthorLog>
            <Status>

            asked 
            </Status>
            <Log>
                Feb 15 at 19:23

            </Log>
                </AuthorLog>
            </AuthorContainer>
        </div>
    );
};

const AuthorContainer = styled.div`
display : flex;
justify-content: space-between;
background-color: #e6f4ff;
padding: 10px;

`

const AvatarContainer = styled.div`
`


const AuthorNameBox =styled.div`
font-size: 13px;    
padding-left: 10px;
`
const AuthorName =styled.p`
font-weight: bold;
color: #07C;
margin 0;
`

const AuthorLog= styled.div`
display: flex;
flex-direction: column;
font-size: 10px;
`
const AuthorBox =  styled.div`
display: flex;
`
const Status = styled.div`
display: flex;
font-weight: bold;
justify-content: end;
color: #242729;
`
const Log = styled.div`

`
const Score = styled.div`
    display: flex
`
const Point = styled.div`
    display: flex
`
const Frst = styled.div`
    display: flex;
    color: #c6c6c6;
`
const Scnd = styled.div`
    display: flex;
    color: #d19a62;
`
export default auhoraswered;