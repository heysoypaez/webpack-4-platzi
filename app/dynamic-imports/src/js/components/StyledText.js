
import React from "react";
import "../../sass/sass.scss";
import "../../less/less.less";
import "../../stylus/stylus.styl";

function StyledText(props) {
	
	return(
		<section className="StyledText">

			<h2 className="sass">Texto en Sass</h2>
			<h2 className="less">Texto en LESS</h2>
			<h2 className="stylus">Texto en Stylus</h2>
			<h2 className="post-css">Texto con PostCSS</h2>

		</section>
	)
}

export default StyledText;


