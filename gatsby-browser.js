const React = require('react')

const { ThemeProvider } = require('./src/components/theme')

exports.wrapRootElement = ({ element }) => {
  return <ThemeProvider>{element}</ThemeProvider>
}
