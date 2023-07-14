// import "./bootstrap-custom.css";
// import "./index.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "./assets/scss/main.scss"

import React from "react";
// import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client"
import App from "./App";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { HashRouter as Router } from "react-router-dom";

import { Provider } from 'react-redux';
import store from './store';
import { positions, transitions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

library.add(fas, far, fab);

const alertOptions = {
  timeout: 5000,
  position: positions.BOTTOM_CENTER,
  transition: transitions.SCALE
}

const root = createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>

    <Provider store={store} >
      <AlertProvider template={AlertTemplate} {...alertOptions} >
        <App />
      </AlertProvider>
    </Provider>

  // </React.StrictMode>
);
