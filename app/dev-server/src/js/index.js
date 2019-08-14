
//Gracias a Webpack es que es posible hacer esto
import "../css/index.css";

import Text from "./text.js";


Text();


if (module.hot) {
	module.hot.accept("./text.js", function() {
		console.log("He recargado en caliente")
		text()
	})
}