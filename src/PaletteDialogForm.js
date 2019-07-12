import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { Picker } from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css';

class PaletteDialogForm extends Component {
	constructor (props) {
		super(props);
		this.state = {
			open           : true,
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
		const { hideForm, handleSubmit } = this.props;
		return (
			<Dialog open={this.state.open} onClose={hideForm} aria-labelledby='form-dialog-title'>
				<DialogTitle id='form-dialog-title'>Choose a Palette Name</DialogTitle>
				<ValidatorForm onSubmit={() => handleSubmit(newPaletteName)}>
					<DialogContent>
						<Picker />
						<DialogContentText>Please chose a unique name for your beautiful palette.</DialogContentText>
						<TextValidator
							label='Palette Name'
							value={this.state.newPaletteName}
							name='newPaletteName'
							onChange={this.handleChange}
							fullWidth
							margin='normal'
							validators={[
								'required',
								'isUniquePaletteName',
							]}
							errorMessages={[
								'A palette name is required',
								'Palette name already used',
							]}
						/>
					</DialogContent>
					<DialogActions>
						<Button onClick={hideForm} color='primary'>
							Cancel
						</Button>
						<Button variant='contained' color='secondary' type='submit'>
							Save Palette
						</Button>
					</DialogActions>
				</ValidatorForm>
			</Dialog>
		);
	}
}
export default PaletteDialogForm;
