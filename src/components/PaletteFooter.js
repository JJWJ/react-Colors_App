// React Import
import React from 'react';
// Material-Ui Import
import { withStyles } from '@material-ui/styles';
// Style Import
import styles from '../styles/PaletteFooterStyles';

function PaletteFooter(props) {
	const { paletteName, emoji, classes } = props;
	return (
		<div>
			<footer className={classes.PaletteFooter}>
				{paletteName}
				<span className={classes.emoji}>{emoji}</span>
			</footer>
		</div>
	);
}

export default withStyles(styles)(PaletteFooter);
