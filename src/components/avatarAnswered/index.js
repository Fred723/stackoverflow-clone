import React from 'react'
import styled from 'styled-components'

const AvatarEdited = ({
  size = 50,
  src = 'https://i.stack.imgur.com/ZBhdJ.jpg?s=30&g=1'
}) => {
  return <AvatarEditedImage size={size} src={src}></AvatarEditedImage>
}

const AvatarEditedImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 3px;
`

export default AvatarEdited
