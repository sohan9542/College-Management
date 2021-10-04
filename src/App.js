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

const App = () => {
  return (
    <Router>
     
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/department/:depID">
          <Dashboard />
        </Route>
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
