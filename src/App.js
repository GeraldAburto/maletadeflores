import React from 'react';
import { Route, Switch } from 'react-router-dom';

import 'flexboxgrid/dist/flexboxgrid.css';
import './App.css';

import HomePage from './pages/home/home.component';
import CollectionPage from './pages/collection/collection.component';
import RegisterPage from './pages/register/register.component';
import Header from './components/header/header.component';

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/colecciones' component={CollectionPage} />
        <Route exact path='/registro' component={RegisterPage}/>
      </Switch>
    </div>
  );
}
export default App;