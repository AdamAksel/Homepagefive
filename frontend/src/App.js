import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { Route } from 'react-router-dom'
import {
  Footer,
  MainPage,
  Navbar,
  Blog,
  FAQ,
  Contact,
  Login,
  Projects,
} from './components'
import styled from 'styled-components'
import { GlobalStyle } from './globalstyles'

const StyledApp = styled.div``

function App() {
  return (
    <Router>
      <StyledApp>
        <GlobalStyle />
        <Navbar />
        <main>
          <Route path='/' component={MainPage} exact />
          <Route path='/FAQ' component={FAQ} />
          <Route path='/login' component={Login} />
          <Route path='/blog' component={Blog} />
          <Route path='/projects' component={Projects} />
          <Route path='/contact' component={Contact} />
        </main>
        <Footer />
      </StyledApp>
    </Router>
  )
}

export default App
