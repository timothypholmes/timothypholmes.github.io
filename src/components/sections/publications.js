import React, { useRef } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Img from "gatsby-image"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { motion } from "framer-motion"

import { useOnScreen } from "../../hooks"
import ContentWrapper from "../../styles/ContentWrapper"
import Underlining from "../../styles/Underlining"
import Social from "../social"

const StyledSection = styled(motion.section)`
  width: 100%;
  height: auto;
  background: ${({ theme }) => theme.colors.background};
  margin-top: 6rem;
  display: flex;
  justify-content: center;
`

const StyledContentWrapper = styled(ContentWrapper)`
  && {
    width: 100%;
    /* Don't stretch container over the full page width */
    height: 100%;
    display: inline-block;
    p {
      margin-top: 0;
      margin-bottom: 0;
    }
    .profile {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      margin-top: 3rem;
      margin-bottom: 2rem;
      @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
        flex-direction: row;
        align-items: center;
        margin-bottom: 3rem;
      }
      .details {
        font-size: 1.125rem;
        line-height: 2rem;
      }
    }
  }
`

const Publications = ({ content }) => {
  const { body, frontmatter } = content[0].node

  // Required for animation
  const ref = useRef()
  const onScreen = useOnScreen(ref)
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 } 
  }

  return (
    <StyledSection id="publications" ref={ref} variants={variants} animate={onScreen ? "visible" : "hidden"}>
      <StyledContentWrapper>
        <h3>{frontmatter.title}</h3>
        <MDXRenderer>{body}</MDXRenderer>
        <div className="profile">
          <div className="details">
          </div>
        </div>
      </StyledContentWrapper>
    </StyledSection>
  )
}

Publications.propTypes = {
  content: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        body: PropTypes.string.isRequired,
        frontmatter: PropTypes.object.isRequired,
      }).isRequired,
    }).isRequired
  ).isRequired,
}

export default Publications
