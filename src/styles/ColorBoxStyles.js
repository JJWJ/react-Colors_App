import chroma from 'chroma-js';

export default {
	ColorBox        : {
		width                 : '20%',
		height                : (props) =>

				props.showLink ? '25%' :
				'50%',
		margin                : '0 auto',
		display               : 'inline-block',
		position              : 'relative',
		cursor                : 'pointer',
		marginBottom          : '-0.225rem',
		'&:hover $copyButton' : {
			opacity    : 1,
			transition : '0.5s',
		},
	},
	copyText        : {
		color : (props) =>

				chroma(props.background).luminance() >= 0.08 ? 'rgba(0,0,0,0.7)' :
				'white',
	},
	colorName       : {
		color : (props) =>

				chroma(props.background).luminance() <= 0.08 ? 'white' :
				'rgba(0,0,0,0.7)',
	},
	seeMore         : {
		color         : (props) =>

				chroma(props.background).luminance() >= 0.08 ? 'rgba(0,0,0,0.7)' :
				'white',
		background    : 'rgba(255, 255, 255, 0.3)',
		position      : 'absolute',
		right         : '0rem',
		bottom        : '0rem',
		width         : '4rem',
		height        : '2rem',
		textAlign     : 'center',
		lineHeight    : '2rem',
		textTransform : 'uppercase',
	},
	copyButton      : {
		color          : (props) =>

				chroma(props.background).luminance() >= 0.08 ? 'rgba(0,0,0,0.7)' :
				'white',
		width          : '4.5rem',
		height         : '2rem',
		position       : 'absolute',
		display        : 'inline-block',
		top            : '50%',
		left           : '50%',
		marginLeft     : '-2.25rem',
		marginTop      : '-1rem',
		textAlign      : 'center',
		outline        : 'none',
		background     : 'rgba(255, 255, 255, 0.3)',
		fontSize       : '1rem',
		textTransform  : 'uppercase',
		border         : 'none',
		textDecoration : 'none',
		opacity        : '0',
	},
	boxContent      : {
		position      : 'absolute',
		padding       : '0.3rem',
		width         : '100%',
		left          : '0.0rem',
		bottom        : '0.0rem',
		color         : 'black',
		letterSpacing : '0.1rem',
		textTransform : 'uppercase',
		fontSize      : '0.8rem',
	},
	copyOverlay     : {
		opacity    : '0',
		zIndex     : '0',
		width      : '100%',
		height     : '100%',
		transition : 'transform 0.6s ease-in-out',
		transform  : 'scale(0.1)',
	},
	showOverlay     : {
		opacity   : '1',
		transform : 'scale(50)',
		zIndex    : '10',
		position  : 'absolute',
	},
	copyMessage     : {
		position       : 'fixed',
		left           : '0',
		right          : '0',
		top            : '0',
		bottom         : '0',
		display        : 'flex',
		flexDirection  : 'column',
		alignItems     : 'center',
		justifyContent : 'center',
		fontSize       : '4rem',
		transform      : 'scale(0.1)',
		opacity        : '0',
		color          : 'white',
		'& h1'         : {
			fontWeight    : '400',
			textShadow    : '1px 2px black',
			background    : 'rgba(255, 255, 255, 0.2)',
			width         : '100%',
			textAlign     : 'center',
			marginBottom  : '0',
			padding       : '1rem',
			textTransform : 'uppercase',
		},
		'& p'          : {
			fontSize   : '2rem',
			fontWeight : '100',
		},
	},
	showCopyMessage : {
		opacity         : '1',
		transform       : 'scale(1)',
		zIndex          : '25',
		transition      : 'all 0.4s ease-in-out',
		transitionDelay : '0.3s',
	},
};
