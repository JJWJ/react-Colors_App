import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PaletteList extends Component {
	render () {
		const { palette } = this.props;
		return (
			<div>
				<h1>Color Palette Creator</h1>
				{palette.map((palette) => (
					<p>
						<Link to={`/palette/${palette.id}`}>{palette.paletteName}</Link>
					</p>
				))}
			</div>
		);
	}
}
export default PaletteList;