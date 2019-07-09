import React from 'react';
import { withStyles } from '@material-ui/styles';

const styles = {
	root : {
		width        : '20%',
		height       : '25%',
		margin       : '0 auto',
		display      : 'inline-block',
		position     : 'relative',
		cursor       : 'pointer',
		marginBottom : '-0.225rem',
	},
};

function DraggableColorBox (props){
	const { root } = props.classes;
	return (
		<div className={root} style={{ backgroundColor: props.color }}>
			{props.name}
		</div>
	);
}
export default withStyles(styles)(DraggableColorBox);
