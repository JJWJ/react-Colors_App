// Data Import
import sizes from './sizes';

const styles = {
	Palette: {
		height: '100vh',
		display: 'flex',
		flexDirection: 'column',
	},
	colors: {
		height: '90%',
	},
	goBack: {
		width: '20%',
		height: '50%',
		margin: '0 auto',
		display: 'inline-block',
		position: 'relative',
		cursor: 'pointer',
		marginBottom: '-0.225rem',
		opacity: '1',
		backgroundColor: 'black',
		'& a': {
			color: 'white',
			width: '4.5rem',
			height: '2rem',
			position: 'absolute',
			display: 'inline-block',
			top: '50%',
			left: '50%',
			marginLeft: '-2.25rem',
			marginTop: '-1rem',
			textAlign: 'center',
			outline: 'none',
			background: 'rgba(255, 255, 255, 0.3)',
			fontSize: '1rem',
			textTransform: 'uppercase',
			border: 'none',
			textDecoration: 'none',
		},
		[sizes.down('lg')]: {
			width: '25%',
			height: '33.3333%',
		},
		[sizes.down('md')]: {
			width: '50%',
			height: '20%',
		},
		[sizes.down('xs')]: {
			width: '100%',
			height: '10%',
		},
	},
};

export default styles;
