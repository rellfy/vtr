import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Main from "./components/Main";

ReactDOM.render(
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </Router>,
    document.getElementById("root")
);
