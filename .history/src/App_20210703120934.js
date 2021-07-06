import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import About from './page/About';
import Home from './page/Home';
import NotFound from './page/NotFound';
import News from './page/News';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/about" exact component={About}></Route>
        <Route path="/News" exact component={N}
        <Route component={NotFound}></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;