import React, { Component } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import theme from './components/theme'
import Button from './components/Button'

const Text = styled.p`
  margin: 1em 1em
  font-family: ${(props) => props.theme.font || 'sans-serif'}
`

const Layout = ({children}) => (
  <ThemeProvider theme={theme}>
    { children }
  </ThemeProvider>
)

class App extends Component {
  render() {
    return (
      <Layout>
        <div>
          <Text>See how the Button below is following the theme even though the code for the button hasn't changed?</Text>
          <Button>Themed Button</Button>
        </div>
      </Layout>     
    )
  }
}

export default App