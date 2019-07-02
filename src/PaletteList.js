import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MiniPalette from './MiniPalette';

class PaletteList extends Component {
	render () {
		const { palette } = this.props;
		return (
			<div>
				<MiniPalette />
				<h1>Color Palette Creator</h1>
				{palette.map((palette) => <MiniPalette {...palette} />)}
			</div>
		);
	}
}
export default PaletteList;
