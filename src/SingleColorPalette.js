import React, { Component } from 'react';
import Navbar from './Navbar';
import ColorBox from './ColorBox';
import PaletteFooter from './PaletteFooter';

class SingleColorPalette extends Component {
	constructor (props) {
		super(props);
		this._shades = this.gatherShades(this.props.palette, this.props.colorId);
		this.state = {
			format : 'hex',
		};
		this.changeFormat = this.changeFormat.bind(this);
		// console.log(this._shades);
	}
	gatherShades (palette, colorToFilter) {
		let shades = [];
		let allColors = palette.colors;

		for (let key in allColors) {
			shades = shades.concat(allColors[key].filter((color) => color.id === colorToFilter));
		}
		return shades.slice(1);
	}
	changeFormat (val) {
		this.setState({ format: val });
	}
	render () {
		const { changeFormat } = this;
		const { format } = this.state;
		const colorBoxes = this._shades.map((color) => (
			<ColorBox key={color.name} name={color.name} background={color[format]} showLink={false} />
		));
		const { paletteName, emoji } = this.props.palette;
		return (
			<div className='Palette'>
				<Navbar handleChange={changeFormat} isSingleColor={true} />
				<div className='Palette-colors'>{colorBoxes}</div>
				<PaletteFooter emoji={emoji} paletteName={paletteName} />
			</div>
		);
	}
}

export default SingleColorPalette;
