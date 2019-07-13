import React from 'react';
import { withStyles } from '@material-ui/styles';
import { SortableElement } from 'react-sortable-hoc';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import styles from './styles/DraggableColorBoxStyles';

const DraggableColorBox = SortableElement((props) => {
	const { root, boxContent, deleteIcon } = props.classes;
	const { handleClick, name, color } = props;
	return (
		<div className={root} style={{ backgroundColor: color }}>
			<div className={boxContent}>
				<span>{name}</span>
				<DeleteForeverOutlinedIcon className={deleteIcon} onClick={handleClick} />
			</div>
		</div>
	);
});
export default withStyles(styles)(DraggableColorBox);
