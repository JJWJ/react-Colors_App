import React, { Component } from 'react';
import MiniPalette from './MiniPalette';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { withStyles } from '@material-ui/styles';
import styles from './styles/PaletteListStyles';
import { Link } from 'react-router-dom';

class PaletteList extends Component {
	goToPalette (id) {
		this.props.history.push(`/palette/${id}`);
	}
	render () {
		const { palette, classes, deletePaletteById } = this.props;
		return (
			<div className={classes.root}>
				<div className={classes.container}>
					<nav className={classes.nav}>
						<h1 className={classes.title}>Color Palette Creator</h1>
						<Link to='/palette/new'>Create A New Palette</Link>
					</nav>
					<TransitionGroup className={classes.palettes}>
						{palette.map((palette) => (
							<CSSTransition key={palette.id} classNames='fade' timeout={500}>
								<MiniPalette
									{...palette}
									handleClick={() => this.goToPalette(palette.id)}
									deletePaletteById={deletePaletteById}
									key={palette.id}
									id={palette.id}
								/>
							</CSSTransition>
						))}
					</TransitionGroup>
				</div>
			</div>
		);
	}
}
export default withStyles(styles)(PaletteList);
