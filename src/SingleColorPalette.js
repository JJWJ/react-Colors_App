// React Imports
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// Material-Ui Import
import { withStyles } from '@material-ui/styles';
// Component Imports
import Navbar from './components/Navbar';
import ColorBox from './components/ColorBox';
import PaletteFooter from './components/PaletteFooter';
// Style Import
import styles from './styles/PaletteStyles';

class SingleColorPalette extends Component {
	constructor(props) {
		super(props);
		this._shades = this.gatherShades(
			this.props.palette,
			this.props.colorId,
		);
		this.state = {
			format: 'hex',
		};
		this.changeFormat = this.changeFormat.bind(this);
	}
	gatherShades(palette, colorToFilter) {
		let shades = [];
		let allColors = palette.colors;

		for (let key in allColors) {
			shades = shades.concat(
				allColors[key].filter((color) => color.id === colorToFilter),
			);
		}
		return shades.slice(1);
	}
	changeFormat(val) {
		this.setState({ format: val });
	}
	render() {
		const { classes } = this.props;
		const { format } = this.state;
		const colorBoxes = this._shades.map((color) => (
			<ColorBox
				key={color.name}
				name={color.name}
				background={color[format]}
				showLink={false}
			/>
		));
		const { paletteName, emoji, id } = this.props.palette;
		return (
			<div className={classes.Palette}>
				<Navbar handleChange={this.changeFormat} isSingleColor={true} />
				<div className={classes.colors}>
					{colorBoxes}
					<div className={classes.goBack}>
						<Link
							to={`/palette/${id}`}
							key='Go Back'
							className='back-button'
						>
							Go Back
						</Link>
					</div>
				</div>
				<PaletteFooter emoji={emoji} paletteName={paletteName} />
			</div>
		);
	}
}

export default withStyles(styles)(SingleColorPalette);
