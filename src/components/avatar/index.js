import React from 'react'
import styled from 'styled-components'

const Avatar = ({
  size = 50,
  src = './asked_logo.jpg'
}) => {
  return <AvatarImage size={size} src={src}></AvatarImage>
}

const AvatarImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 3px;
`

export default Avatar
