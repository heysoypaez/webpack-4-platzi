
//Gracias a Webpack es que es posible hacer esto
import React from "react";
import {render} from "react-dom";
import Contact from "./components/Contact.js";
import "../css/index.css";

render(<Contact />, document.getElementById("root"))