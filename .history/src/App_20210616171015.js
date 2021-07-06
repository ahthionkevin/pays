import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './page/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;