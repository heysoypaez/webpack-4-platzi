
import React from "react";

function Loader({ data }) {

	return(
	 <li key={data.id} >
	 	{data.name}
	 </li>  
	)
}

export default Loader;


