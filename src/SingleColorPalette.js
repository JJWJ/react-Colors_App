import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import ColorBox from './ColorBox';
import PaletteFooter from './PaletteFooter';
import { withStyles } from '@material-ui/styles';

const styles = {
	Palette : {
		height        : '100vh',
		display       : 'flex',
		flexDirection : 'column',
	},
	colors  : {
		height : '90%',
	},
	goBack  : {
		width           : '20%',
		height          : '50%',
		margin          : '0 auto',
		display         : 'inline-block',
		position        : 'relative',
		cursor          : 'pointer',
		marginBottom    : '-0.225rem',
		opacity         : '1',
		backgroundColor : 'black',
		'& a'           : {
			color          : 'white',
			width          : '4.5rem',
			height         : '2rem',
			position       : 'absolute',
			display        : 'inline-block',
			top            : '50%',
			left           : '50%',
			marginLeft     : '-2.25rem',
			marginTop      : '-1rem',
			textAlign      : 'center',
			outline        : 'none',
			background     : 'rgba(255, 255, 255, 0.3)',
			fontSize       : '1rem',
			textTransform  : 'uppercase',
			border         : 'none',
			textDecoration : 'none',
		},
	},
};

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
		const { classes } = this.props;
		const { format } = this.state;
		const colorBoxes = this._shades.map((color) => (
			<ColorBox key={color.name} name={color.name} background={color[format]} showLink={false} />
		));
		const { paletteName, emoji, id } = this.props.palette;
		return (
			<div className={classes.Palette}>
				<Navbar handleChange={changeFormat} isSingleColor={true} />
				<div className={classes.colors}>
					{colorBoxes}
					<div className={classes.goBack}>
						<Link to={`/palette/${id}`} key='Go Back' className='back-button'>
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
