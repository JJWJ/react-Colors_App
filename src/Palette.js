// React Import
import React, { Component } from 'react';
// Material Import
import { withStyles } from '@material-ui/styles';
// Components Imports
import ColorBox from './components/ColorBox';
import Navbar from './components/Navbar';
import PaletteFooter from './components/PaletteFooter';
// Style Import
import styles from './styles/PaletteStyles';

class Palette extends Component {
	constructor(props) {
		super(props);
		this.state = { level: 500, format: 'hex' };
		this.changeLevel = this.changeLevel.bind(this);
		this.changeFormat = this.changeFormat.bind(this);
	}

	changeLevel(level) {
		this.setState({ level });
	}

	changeFormat(val) {
		this.setState({ format: val });
	}
	render() {
		const { colors, paletteName, emoji, id } = this.props.palette;
		const { classes } = this.props;
		const { level, format } = this.state;
		const colorBoxes = colors[level].map((color) => (
			<ColorBox
				background={color[format]}
				name={color.name}
				key={color.id}
				moreUrl={`/palette/${id}/${color.id}`}
				showLink={true}
			/>
		));
		return (
			<div className={classes.Palette}>
				<Navbar
					level={level}
					changeLevel={this.changeLevel}
					handleChange={this.changeFormat}
					isSingleColor={false}
				/>
				<div className={classes.colors}>{colorBoxes}</div>
				<PaletteFooter emoji={emoji} paletteName={paletteName} />
			</div>
		);
	}
}

export default withStyles(styles)(Palette);
