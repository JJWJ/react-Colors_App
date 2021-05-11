// React Import
import React, { Component } from 'react';
// Material-Ui Imports
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
// Helper Import
import { ChromePicker } from 'react-color';
// Style Import
import styles from '../styles/ColorPickerFormStyles';

class ColorPickerForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentColor: 'orange',
			newColorName: '',
		};
		this.updateCurrentColor = this.updateCurrentColor.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	componentDidMount() {
		ValidatorForm.addValidationRule('isUniqueName', (value) =>
			this.props.colors.every(
				({ name }) => name.toLowerCase() !== value.toLowerCase(),
			),
		);
		ValidatorForm.addValidationRule('isUniqueColor', (value) =>
			this.props.colors.every(
				({ color }) => color !== this.state.currentColor,
			),
		);
	}

	updateCurrentColor(newColor) {
		this.setState({ currentColor: newColor.hex });
	}
	handleChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}
	handleSubmit() {
		const newColor = {
			color: this.state.currentColor,
			name: this.state.newColorName,
		};
		this.props.addNewColor(newColor);
		this.setState({
			newColorName: '',
		});
	}
	render() {
		const { paletteIsFull, classes } = this.props;
		const { currentColor, newColorName } = this.state;
		return (
			<div>
				<ChromePicker
					color={currentColor}
					onChangeComplete={this.updateCurrentColor}
					className={classes.picker}
				/>
				<ValidatorForm
					onSubmit={this.handleSubmit}
					instantValidate={false}
				>
					<TextValidator
						value={newColorName}
						name='newColorName'
						variant='filled'
						placeholder='Color Name'
						margin='normal'
						onChange={this.handleChange}
						className={classes.colorNameInput}
						validators={[
							'required',
							'isUniqueName',
							'isUniqueColor',
						]}
						errorMessages={[
							'Enter a color name',
							'Color name is taken',
							'Color already used',
						]}
					/>
					<Button
						variant='contained'
						type='submit'
						color='primary'
						disabled={paletteIsFull}
						className={classes.addColor}
						style={{
							backgroundColor: paletteIsFull
								? 'grey'
								: this.state.currentColor,
						}}
					>
						{paletteIsFull ? 'Palette Full' : 'Add Color'}
					</Button>
				</ValidatorForm>
			</div>
		);
	}
}
export default withStyles(styles)(ColorPickerForm);
