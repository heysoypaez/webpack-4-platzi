
import React from "react";
import LoaderList from "./LoaderList.js"
import logo from "../../images/platzi.png";
import video from "../../video/que-es-core.mp4";
import StyledText from "./StyledText.js";

function App(props) {

	return(
		<section className="App">
			
			<video src={video} width={300} controls poster={logo}/>

			<h1>App Testing</h1>

			<img src={logo} alt="platzi" width={100} />

			<LoaderList />

			<StyledText  />

		</section>
	)
}

export default App;


