// React Imports
import React from 'react';
import { SortableContainer } from 'react-sortable-hoc';
// Dependant Component Import
import DraggableColorBox from './DraggableColorBox';

const DraggableColorList = SortableContainer(({ colors, removeColorBox }) => {
	return (
		<div style={{ height: '100%' }}>
			{colors.map((color, index) => (
				<DraggableColorBox
					index={index}
					key={color.name}
					color={color.color}
					name={color.name}
					handleClick={() => removeColorBox(color.name)}
				/>
			))}
		</div>
	);
});
export default DraggableColorList;
