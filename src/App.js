import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Dashboard from './Components/Dashboard/Dashboard';
import Home from './Components/Home/Home';
import Footer from './Layout/Footer';
import Navbar from './Layout/Navbar';
import { createContext } from 'react'
import Login from './Components/Authentication/Login';
export const RapperContent = createContext()
const App = () => {
  const [authopen, setAuthopen] = React.useState(false)
  return (
    <RapperContent.Provider value={{ authopen, setAuthopen }}>
      <Router>

        <Navbar />
        <Login />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/:depID/notice">
            <Dashboard />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </RapperContent.Provider>
  )
}

export default App
