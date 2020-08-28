import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import HomePage from './pages/HomePage';
import PackageProfilePage from './pages/PackageProfilePage';

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
