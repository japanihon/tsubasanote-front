import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Notes from './Notes';
import Labels from './Labels';

const App = () => (
    <BrowserRouter>
      <div>
          <Route exact path='/' component={Notes} />
          <Route path='/labels' component={Labels} />
      </div>
    </BrowserRouter>
)

export default App;
