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

function App() {
  return (
    <Router>
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
    </Router>
  )
}

export default App
