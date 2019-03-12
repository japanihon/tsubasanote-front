import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Notes from './Notes';
import NoteDetail from './NoteDetail';
import Labels from './Labels';
import LabelDetail from './LabelDetail';
import SideBar from './SideBar';

const App = () => (
    <React.Fragment>
      <SideBar />
      <BrowserRouter>
        <div>
            <Route exact path='/' component={Notes} />
            <Route exact path='/notes' component={Notes} />
            <Route path='/notes/:id' component={NoteDetail} />
            <Route exact path='/labels' component={Labels} />
            <Route path='/labels/:id' component={LabelDetail} />
        </div>
      </BrowserRouter>
    </React.Fragment>
)

export default App;
