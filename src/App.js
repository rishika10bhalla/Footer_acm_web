import React from 'react';
import './App.css';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from "./container/Home";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;


