// Data Import
import sizes from './sizes';
// Background Import
import bg from './bg.svg';

const styles = {
	'@global': {
		'.fade-exit': {
			opacity: '1',
		},
		'.fade-exit-active': {
			opacity: '0',
			transition: 'opacity 500ms ease-out',
		},
	},
	root: {
		height: '100vh',
		display: 'flex',
		alignItems: 'flex-start',
		justifyContent: 'center',
		overflow: 'scroll',
		/* background by SVGBackgrounds.com */
		backgroundColor: '#6481aa',
		backgroundImage: `url(${bg})`,
	},
	title: {
		fontSize: '2rem',
	},
	container: {
		width: '50%',
		display: 'flex',
		alignItems: 'flex-start',
		flexDirection: 'column',
		flexWrap: 'wrap',
		[sizes.down('xl')]: {
			width: '80%',
		},
		[sizes.down('xs')]: {
			width: '75%',
		},
	},
	nav: {
		display: 'flex',
		width: '94%',
		justifyContent: 'space-between',
		alignItems: 'center',
		color: 'white',
		'& a ': {
			color: 'white',
		},
	},
	palettes: {
		boxSizing: 'border-box',
		width: '100%',
		display: 'grid',
		gridTemplateColumns: 'repeat(3, 30%)',
		gridGap: '1.5rem',
		[sizes.down('md')]: {
			gridTemplateColumns: 'repeat(2, 50%)',
		},
		[sizes.down('xs')]: {
			gridTemplateColumns: 'repeat(1, 100%)',
			gridGap: '1.0rem',
		},
	},
};

export default styles;
