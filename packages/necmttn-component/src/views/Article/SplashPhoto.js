import React from 'react'
import styled from 'styled-components'

const SplashPhoto = (props) => (
  <SplashPhotoWrapper {...props} >
    <div className="cover-image" />
    <figcaption>{props.credit}</figcaption>
  </SplashPhotoWrapper>
)

const SplashPhotoWrapper = styled.figure`
  width: 100%;
  .cover-image {
    background-image: url("${props => props.image}");
    height: ${props => props.imageHeight || "400px"};
    background-size: ${props => props.imageSize || "cover"};
  }
`

export default SplashPhoto
