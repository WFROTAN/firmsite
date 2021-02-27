import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"
import { media } from "@utils/media"

const Logo = () => {
  const data = useStaticQuery(graphql`
    query headerImageQueryAndHeaderImageQuery {
      file(relativePath: { eq: "redGradient.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <LogoContainer>
      <RedCircle>
        <Img fluid={data.file.childImageSharp.fluid} />
      </RedCircle>
      {/*<StarterLogo>afterRed</StarterLogo>*/}
    </LogoContainer>
  )
}

export default Logo

const LogoContainer = styled.div`
  position: relative;
`

const StarterLogo = styled.div`
  font-size: 30px;
  margin-right: 20px;
  @media ${media.lg} {
    margin-right: 0px;
  }
`

const RedCircle = styled.div`
  width: 100px;
`
