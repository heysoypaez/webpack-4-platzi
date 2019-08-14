
import React, {useState} from "react";
import Loader from "./Loader.js";
import data from "../../data.json";


function LoaderList(props) {
	
	const [loaderList, setLoaderList] = useState([]);
	const handleClick = () => setLoaderList(data.loaders);

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


