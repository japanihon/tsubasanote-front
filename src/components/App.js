import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Notes from "./Notes";
import NoteDetail from "./NoteDetail";
import Labels from "./Labels";
import LabelDetail from "./LabelDetail";
import NoteNew from "./NoteNew.js";
import SideBar from "./SideBar.js";
import NoteEdit from "./NoteEdit.js";

const App = () => (
    <BrowserRouter>
        <div>
            <SideBar />
            <Switch>
                <Route exact path="/" component={Notes} />
                <Route exact path="/notes" component={Notes} />
                <Route exact path="/notes/:id/edit" component={NoteEdit} />
                <Route exact path="/notes/new" component={NoteNew} />
                <Route path="/notes/:id" component={NoteDetail} />
                <Route exact path="/labels" component={Labels} />
                <Route path="/labels/:id" component={LabelDetail} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default App;
