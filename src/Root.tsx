import { Outlet } from 'react-router-dom'
import styled from 'styled-components'

import Header from './components/Header'
import Footer from './components/Footer'

const Container = styled.div`
  background: white;
  max-width: 1085px;
  margin: 0 auto;
`

function App() {
  return (
    <Container>
      <Header />
      <Outlet />
      <Footer />
    </Container>
  )
}

export default App
