
import React, {useState} from "react";
import Loader from "./Loader.js";
import data from "../../data.json";


function LoaderList(props) {
	
	const [loaderList, setLoaderList] = useState([]);

	const handleClick = async () => {
		setLoaderList(data.loaders);
		const {superAlert} = await import("./alert.js");
		superAlert("OMG, este módulo ha cargado dinamicamente")
	}

	return(
		<section className="LoaderList">
			<ul>
				{ loaderList.map( loader => <Loader data={loader} />) }
			</ul>

			<button onClick={handleClick}>
				Mostrar lo aprendido
			</button>
				
		</section>
	)
}

export default LoaderList;


