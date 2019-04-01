import React from "react";
import { render } from "react-dom";
import App from "./components/App";
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";

const rootEl = document.getElementById("app");

render(<App />, rootEl);

if (module.hot) {
    module.hot.accept();
}
