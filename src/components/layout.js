import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { Header } from './header'
import { styled } from './theme'

import './layout.css'

const StyledWrapper = styled('div', ({ $theme }) => ({
  backgroundColor: $theme.colors.bodyBackgroundColor,
  width: '100%',
  height: '100vh',
  overflow: 'auto',
  transition: 'all 0.2s ease-in-out',
  fontFamily: $theme.fontFamily.sans,
}))

const StyledMainWrapper = styled('main', ({ $theme }) => ({
  maxWidth: '960px',
  margin: '0 auto',
  paddingLeft: $theme.sizings.scale3,
  paddingRight: $theme.sizings.scale3,
  paddingBottom: $theme.sizings.scale3,
  paddingTop: $theme.sizings.scale3,
  [$theme.breakpoints.medium]: {
    paddingLeft: $theme.sizings.scale7,
    paddingRight: $theme.sizings.scale7,
    paddingBottom: $theme.sizings.scale7,
    paddingTop: $theme.sizings.scale7,
  },
}))

export const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <StyledWrapper>
      <Header siteTitle={data.site.siteMetadata.title} />
      <StyledMainWrapper>
        <main>{children}</main>
      </StyledMainWrapper>
    </StyledWrapper>
  )
}
