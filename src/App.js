import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/Pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/Pages/Services';
import Products from './components/Pages/Projects';
import SignUp from './components/Pages/SignUp';
import MultipleInputs from './components/Pages/SignUp';
import Prescription from './components/Pages/Prescription';
import Consult from './components/Pages/Consult';
import Consult2 from './components/Pages/Consult2';
import Login from './components/Pages/Login'
import About from './components/About';
import Contact from './components/Pages/Contact';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/login' component={Login} />
          <Route path='/Prescription' component={Prescription} />
          <Route path='/Consult' component={Consult} />
          <Route path='/Consult2' component={Consult2} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
        </Switch>
      </Router>
    </>
  );
}

export default App;