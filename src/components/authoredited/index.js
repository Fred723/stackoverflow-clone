import React from 'react';
import styled from 'styled-components';
import Avatar from '../avatarEdited/index'
import Badge from '../point/index'

const authorasked = ({ image, titre, content }) => {
    return (
        <div>
            <AuthorContainer>
                <AuthorBox>
                    <AvatarContainer>
                        <Avatar size={50} src={image} />
                    </AvatarContainer>
                    <AuthorNameBox>
                        <AuthorName>
                        leonheess
                        </AuthorName>
                        <Score>
                            <Point>
                            2,523
                            </Point>
                            <Frst>
                                <Badge></Badge>
                            20
                            </Frst>
                            <Scnd>
                            <Badge></Badge>43
                            </Scnd>
                        </Score>

                    </AuthorNameBox>


                </AuthorBox>
                <AuthorLog>
                    <Status>

                    edited 
                    </Status>
                    <Log>
                        Feb 16 at 14:48

                    </Log>
                </AuthorLog>
            </AuthorContainer>
        </div>
    );
};

const AuthorContainer = styled.div`
display : flex;
justify-content: space-between;
padding : 10px;

`

const AvatarContainer = styled.div`
`


const AuthorNameBox =styled.a`
font-size: 13px;    
`
const AuthorName =styled.a`
font-weight: bold;
color: #07C;
`

const AuthorLog= styled.div`
display: flex;
flex-direction: column;
font-size: 10px;
color:#07C;
`
const AuthorBox =  styled.div`
display: flex;
`
const Status = styled.div`
display: flex;

justify-content: end;
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



export default authorasked;