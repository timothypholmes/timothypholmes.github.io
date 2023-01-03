import React from "react";
import ReactDOM from 'react-dom';
import { HashRouter, Route, Routes} from "react-router-dom";

//import "@fortawesome/fontawesome-free/css/all.min.css";

// views without layouts
import Index from "./views/Index.jsx";

ReactDOM.render(
  <HashRouter>
    <Routes>
      {/* add routes without layouts */}
      <Route path="/" exact element={<Index/>} />
      {/* add redirect for first page */}
    </Routes>
  </HashRouter>,
  document.getElementById("root")
);
