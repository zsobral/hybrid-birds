import React from 'react'

import { DARK_THEME, styled, useTheme } from './theme'
import { Sun, Moon } from './icon'

const StyledThemeSwitchButton = styled('button', ({ $theme }) => ({
  background: 'none',
  border: 'none',
  color: 'inherit',
  padding: $theme.sizings.scale1,
  margin: '0px',
  display: 'flex',
}))

export const SwitchThemeButton = () => {
  const { theme, switchTheme } = useTheme()

  return (
    <StyledThemeSwitchButton onClick={switchTheme}>
      {theme.name === DARK_THEME.name ? <Moon /> : <Sun />}
    </StyledThemeSwitchButton>
  )
}
