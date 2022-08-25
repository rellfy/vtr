import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router} from "react-router-dom";

const store = createStore(reducer);

ReactDOM.render(
    <Router>
        <Provider store={store}>
            <Main />
        </Provider>
    </Router>,
    document.getElementById("root")
);