
//Gracias a Webpack es que es posible hacer esto
import "../css/index.css";

import Text from "./text.js";
import Search from "./search.js"
import render from "./render.js"

const id = prompt("¿Quién es ese pokemón?")

Search(id)
	.then( (data) => {
		render(data)
	})

	.catch(() => {
		console.log("No hubo pokemon")
	});

//Text();
