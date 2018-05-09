import React from 'react';
import {Route} from 'react-router-dom';

import './App.css';
import './components/css/standardComponent.css';
import './components/css/form.css';
import './components/css/customerStats.css';

import Navigation from './components/Navigation';
import Home from './components/Home';
import Invitations from './components/Invitations';
import Stats from './components/Stats';
import Settings from './components/Settings';
import Team from './components/Team';
import SignUp from './components/signup';
import SignIn from './components/signin';
import SignOut from './components/signout';



const App = () => {
  return (
    <div>
      <Navigation />
      <Route path='/' exact     component={Home}  />
      <Route path='/signup'     component={SignUp} />
      <Route path='/signin'     component={SignIn} />
      <Route path='/signout'     component={SignOut} />
      <Route path='/invitations'component={Invitations} />
      <Route path='/stats'      component={Stats} />
      <Route path='/settings'   component={Settings} />
      <Route path='/team'       component={Team} />
    </div>
  ); 
}

export default App;
