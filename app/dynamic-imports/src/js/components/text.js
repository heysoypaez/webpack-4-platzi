


const Element = (tag, innerHTML) => {

	function element(tag, innerHTML) { 
		const element = document.createElement(tag);
		element.innerHTML = innerHTML;
		document.body.appendChild(element);
	}

	element("H1", "la Casa de Papel")
	


	const image = document.createElement("img");

	image.src = "https://cdn.tn.com.ar/sites/default/files/styles/1366x765/public/2019/07/29/lacasadepapel.jpg";

	image.width = "300";
	document.body.appendChild(image);

}



export default Element;