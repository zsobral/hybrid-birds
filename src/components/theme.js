import React, { createContext, useContext, useState } from 'react'
import { createStyled } from 'styletron-react'
import { driver, getInitialStyle } from 'styletron-standard'

const BREAKPOINTS = {
  medium: '@media screen and (min-width: 768px)',
  large: '@media screen and (min-width: 1200px)',
}

export const LIGHT_THEME = {
  name: 'light',
  colors: {
    headerBackgroundColor: '#FFFFFF',
    headerColor: '#000000',
    headerBorder: '1px solid rgba(0, 0, 0, 0.1)',
    bodyBackgroundColor: '#FAFAFA',
  },
  fontFamily: {
    sans:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
  },
  sizings: {
    scale0: '0px',
    scale1: '4px',
    scale2: '8px',
    scale3: '12px',
    scale4: '16px',
    scale5: '20px',
    scale6: '24px',
    scale7: '28px',
  },
  breakpoints: BREAKPOINTS,
}

export const DARK_THEME = {
  name: 'dark',
  colors: {
    headerBackgroundColor: '#1A1C20',
    headerBorder: '1px solid #25292F',
    headerColor: '#FFFFFF',
    bodyBackgroundColor: '#141619',
  },
  fontFamily: {
    sans:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
  },
  sizings: {
    scale0: '0px',
    scale1: '4px',
    scale2: '8px',
    scale3: '12px',
    scale4: '16px',
    scale5: '20px',
    scale6: '24px',
    scale7: '28px',
  },
  breakpoints: BREAKPOINTS,
}

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') === DARK_THEME.name ? DARK_THEME : LIGHT_THEME
  )

  const switchTheme = () => {
    const currentTheme =
      theme.name === LIGHT_THEME.name ? DARK_THEME : LIGHT_THEME
    localStorage.setItem('theme', currentTheme.name)
    setTheme(currentTheme)
  }

  return (
    <ThemeContext.Provider value={{ theme, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)

export const styled = createStyled({
  wrapper: (Component) => (props) => {
    const { theme } = useTheme()

    return <Component {...props} $theme={theme} />
  },
  driver,
  getInitialStyle,
})
