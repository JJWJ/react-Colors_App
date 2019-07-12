import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

class PaletteDialogForm extends Component {
	constructor (props) {
		super(props);
		this.state = {
			open           : false,
			newPaletteName : '',
		};
		this.handleClickOpen = this.handleClickOpen.bind(this);
		this.handleClose = this.handleClose.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}
	componentDidMount () {
		ValidatorForm.addValidationRule('isUniquePaletteName', (value) =>
			this.props.palettes.every(({ paletteName }) => paletteName.toLocaleLowerCase() !== value.toLowerCase()),
		);
	}
	handleChange (e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	handleClickOpen () {
		this.setState({ open: true });
	}

	handleClose () {
		this.setState({ open: false });
	}

	render () {
		const { newPaletteName } = this.state;
		return (
			<div>
				<Button variant='outlined' color='primary' onClick={this.handleClickOpen}>
					Open form dialog
				</Button>
				<Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby='form-dialog-title'>
					<DialogTitle id='form-dialog-title'>Subscribe</DialogTitle>
					<DialogContent>
						<DialogContentText>
							To subscribe to this website, please enter your email address here. We will send updates
							occasionally.
						</DialogContentText>
						<ValidatorForm onSubmit={() => this.props.handleSubmit(newPaletteName)}>
							<TextValidator
								label='Palette Name'
								value={this.state.newPaletteName}
								name='newPaletteName'
								onChange={this.handleChange}
								validators={[
									'required',
									'isUniquePaletteName',
								]}
								errorMessages={[
									'A palette name is required',
									'Palette name already used',
								]}
							/>
							<Button variant='contained' color='secondary' type='submit'>
								Save Palette
							</Button>
						</ValidatorForm>
					</DialogContent>
					<DialogActions>
						<Button onClick={this.handleClose} color='primary'>
							Cancel
						</Button>
						<Button onClick={this.handleClose} color='primary'>
							Subscribe
						</Button>
					</DialogActions>
				</Dialog>
			</div>
		);
	}
}
export default PaletteDialogForm;
