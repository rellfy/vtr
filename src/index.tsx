import React from "react";
import ReactDOM from "react-dom";
import Main from "./containers/Main";
import {BrowserRouter as Router} from "react-router-dom";
import {createStore} from 'redux';
import {Provider} from "react-redux"
import {reducer} from "./store";

const store = createStore(reducer);

ReactDOM.render(
    <Router>
        <Provider store={store}>
            <Main />
        </Provider>
    </Router>,
    document.getElementById("root")
);