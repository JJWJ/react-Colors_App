import React from 'react';
import { withStyles } from '@material-ui/styles';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
const styles = {
	root       : {
		width                 : '20%',
		height                : '25%',
		margin                : '0 auto',
		display               : 'inline-block',
		position              : 'relative',
		cursor                : 'pointer',
		marginBottom          : '-0.225rem',
		'&:hover $deleteIcon' : {
			color     : 'white',
			transform : 'scale(1.6)',
		},
	},
	boxContent : {
		position       : 'absolute',
		padding        : '10px',
		width          : '100%',
		left           : '0.0rem',
		bottom         : '0.0rem',
		color          : 'rgba(0,0,0,0.5)',
		letterSpacing  : '0.1rem',
		textTransform  : 'uppercase',
		fontSize       : '12px',
		display        : 'flex',
		justifyContent : 'space-between',
	},
	deleteIcon : {
		transition : 'all 0.3s ease-in-out',
	},
};

function DraggableColorBox (props){
	const { root, boxContent, deleteIcon } = props.classes;
	return (
		<div className={root} style={{ backgroundColor: props.color }}>
			<div className={boxContent}>
				<span>{props.name}</span>
				<DeleteForeverOutlinedIcon className={deleteIcon} />
			</div>
		</div>
	);
}
export default withStyles(styles)(DraggableColorBox);
