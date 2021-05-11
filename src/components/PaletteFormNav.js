// React Imports
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// Material-Ui Imports
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
// Dependant Component Import
import PaletteDialogForm from './PaletteDialogForm';
// Style Import
import styles from '../styles/PaletteFormNavStyles';

class PaletteFormNav extends Component {
	constructor(props) {
		super(props);
		this.state = {
			formShowing: false,
		};
		this.showForm = this.showForm.bind(this);
		this.hideForm = this.hideForm.bind(this);
	}
	showForm() {
		this.setState({
			formShowing: true,
		});
	}
	hideForm() {
		this.setState({
			formShowing: false,
		});
	}
	render() {
		const {
			classes,
			open,
			palettes,
			handleSubmit,
			handleDrawerOpen,
		} = this.props;
		return (
			<div>
				<CssBaseline />
				<AppBar
					position='fixed'
					color='default'
					className={classNames(classes.appBar, {
						[classes.appBarShift]: open,
					})}
				>
					<Toolbar disableGutters={!open}>
						<IconButton
							color='inherit'
							aria-label='Open drawer'
							onClick={handleDrawerOpen}
							className={classNames(classes.menuButton, {
								[classes.hide]: open,
							})}
						>
							<MenuIcon />
						</IconButton>
						<Typography variant='h6' color='inherit' noWrap>
							Create A Palette
						</Typography>
					</Toolbar>
					<div className={classes.navButtons}>
						<Link to='/'>
							<Button
								variant='contained'
								className={classes.button}
								color='secondary'
							>
								Go Back
							</Button>
						</Link>
						<Button
							variant='contained'
							className={classes.button}
							color='primary'
							onClick={this.showForm}
						>
							Save Palette
						</Button>
					</div>
				</AppBar>
				{this.state.formShowing && (
					<PaletteDialogForm
						palettes={palettes}
						handleSubmit={handleSubmit}
						hideForm={this.hideForm}
					/>
				)}
			</div>
		);
	}
}
export default withStyles(styles, { withTheme: true })(PaletteFormNav);
