import React, { Component } from 'react';
import MiniPalette from './MiniPalette';
import { withStyles } from '@material-ui/styles';
import styles from './styles/PaletteListStyles';
import { Link } from 'react-router-dom';

class PaletteList extends Component {
	goToPalette (id) {
		this.props.history.push(`/palette/${id}`);
	}
	render () {
		const { palette, classes } = this.props;
		return (
			<div className={classes.root}>
				<div className={classes.container}>
					<nav className={classes.nav}>
						<h1>Color Palette Creator</h1>
						<Link to='/palette/new'>Create A New Palette</Link>
					</nav>
					<div className={classes.palettes}>
						{palette.map((palette) => (
							<MiniPalette {...palette} handleClick={() => this.goToPalette(palette.id)} />
						))}
					</div>
				</div>
			</div>
		);
	}
}
export default withStyles(styles)(PaletteList);
