// Data Import
import sizes from './sizes';

const styles = {
	Navbar: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-start',
		height: '6vh',
	},

	logo: {
		marginRight: '15px',
		padding: '0 13px',
		fontSize: '22',
		backgroundColor: '#eceff1',
		fontFamily: 'Roboto',
		height: '100%',
		display: 'flex',
		alignItems: 'center',
		'& a ': {
			textDecoration: 'none',
			color: 'black',
		},
		[sizes.down('xs')]: {
			display: 'none',
		},
	},
	slider: {
		width: '20rem',
		margin: '0 0.3rem',
		display: 'inline-block',
		'& .rc-slider-rail': {
			height: '8px',
		},
		'& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:focus, .rc-slider-handle:hover ': {
			backgroundColor: 'green',
			outline: 'none',
			border: '0.2rem solid green',
			boxShadow: 'none',
			width: '13',
			height: '13',
			marginLeft: '-7px',
			marginTop: '-4px',
		},
		'& .rc-slider-track': {
			backgroundColor: 'transparent',
		},
		[sizes.down('xs')]: {
			width: '125px',
		},
	},
	selectContainer: {
		marginLeft: 'auto',
		marginRight: '1rem',
	},
};

export default styles;
