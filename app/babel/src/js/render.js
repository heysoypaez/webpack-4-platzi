function render(data) {
	const pokemon = document.createElement("img");
	pokemon.setAttribute("src", data.sprites.front_default);
	pokemon.setAttribute("class", "pokemon");
	document.body.append(pokemon);
}

export default render;