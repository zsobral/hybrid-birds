import React from 'react'
import { Link } from 'gatsby'

import { styled } from './theme'
import { Egg } from './icon'

const StyledHeader = styled('header', ({ $theme }) => ({
  backgroundColor: $theme.colors.headerBackgroundColor,
  color: $theme.colors.headerColor,
  transition:
    'background-color 0.2s ease-in-out, color 0.2s ease-in-out, border-color 0.2s ease-in-out',
  borderBottom: $theme.colors.headerBorder,
}))

const StyledContainer = styled('div', ({ $theme }) => ({
  marginTop: $theme.sizings.scale0,
  marginBottom: $theme.sizings.scale0,
  marginLeft: 'auto',
  marginRight: 'auto',
  maxWidth: '960px',
  paddingLeft: $theme.sizings.scale7,
  paddingRight: $theme.sizings.scale7,
  paddingBottom: $theme.sizings.scale5,
  paddingTop: $theme.sizings.scale5,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}))

const StyledHeaderTitle = styled('h1', ({ $theme }) => ({
  fontSize: '1.5rem',
  fontWeight: 'bold',
  marginBottom: $theme.sizings.scale0,
}))

const StyledLink = styled(Link, {
  color: 'inherit',
  textDecoration: 'none',
  display: 'flex',
  alignItems: 'center',
})

export const Header = ({ siteTitle }) => (
  <StyledHeader>
    <StyledContainer>
      <StyledHeaderTitle style={{ margin: 0 }}>
        <StyledLink to="/">
          <i style={{ display: 'flex', marginRight: '8px' }}>
            <Egg />
          </i>
          {siteTitle}
        </StyledLink>
      </StyledHeaderTitle>
    </StyledContainer>
  </StyledHeader>
)
