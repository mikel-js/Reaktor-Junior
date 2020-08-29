import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import HomePage from './components/Home/HomePage';
import PackageProfilePage from './components/PackageProfile/PackageProfilePage';

function App() {
  return (
    <Switch>
      <Route exact path='/' render={() => <Landing />} />
      <Route exact path='/home' render={() => <HomePage />} />
      <Route path='/:packageName' render={() => <PackageProfilePage />} />
    </Switch>
  );
}

export default App;
