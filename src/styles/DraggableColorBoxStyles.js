import sizes from './sizes';
const styles = {
	root       : {
		width                 : '20%',
		height                : '25%',
		margin                : '0 auto',
		display               : 'inline-block',
		position              : 'relative',
		cursor                : 'pointer',
		marginBottom          : '-0.4rem',
		'&:hover $deleteIcon' : {
			color     : 'white',
			transform : 'scale(1.6)',
		},
		[sizes.down('lg')]: {
			width  : '25%',
			height : '20%',
		},
		[sizes.down('md')]: {
			width  : '50%',
			height : '10%',
		},
		[sizes.down('sm')]: {
			width  : '100%',
			height : '5%',
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

export default styles;
