import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/layout/Footer';
import Home from './components/layout/Home';
import Join from './components/join/JoinForm';
import User from './components/user/User';
import MarketingTools from './components/marketingTools/MarketingTools';
import Commisions from './components/commisions/Commisions';
import Contacts from './components/contacts/Contacts';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/join" component={Join} />
      <Route exact path="/user" component={User} />
      <Route exact path="/marketingTools" component={MarketingTools} />
      <Route exact path="/commisions" component={Commisions} />
      <Route exact path="/contacts" component={Contacts} />
      <Switch></Switch>
      <Footer />
    </Router>
  );
}

export default App;
