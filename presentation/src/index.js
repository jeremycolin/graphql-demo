import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import Presentation from "./presentation";
require("normalize.css");

ReactDOM.render(<Presentation />, document.getElementById("root"));
registerServiceWorker();
