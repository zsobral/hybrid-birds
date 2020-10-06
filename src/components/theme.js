import React, { createContext, useContext } from 'react'
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

export const ThemeContext = createContext({
  theme: LIGHT_THEME,
  switchTheme: () => {},
})

export const ThemeProvider = ({ children }) => {
  return (
    <ThemeContext.Provider value={{ theme: LIGHT_THEME }}>
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
