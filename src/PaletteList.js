// React Imports
import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Link } from 'react-router-dom';
// Material-Ui Imports
import { withStyles } from '@material-ui/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';
// Component Import
import MiniPalette from './components/MiniPalette';
// Style Import
import styles from './styles/PaletteListStyles';

class PaletteList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			deleteDialog: false,
			deleteId: '',
		};
		this.toggleDialog = this.toggleDialog.bind(this);
		this.handelDelete = this.handelDelete.bind(this);
		this.goToPalette = this.goToPalette.bind(this);
	}
	toggleDialog(id) {
		this.setState({
			deleteDialog: !this.state.deleteDialog,
			deleteId: id ? id : '',
		});
	}
	handelDelete() {
		this.props.deletePaletteById(this.state.deleteId);
		this.toggleDialog();
	}

	goToPalette(id) {
		this.props.history.push(`/palette/${id}`);
	}
	render() {
		const { palette, classes } = this.props;
		const { deleteDialog } = this.state;
		return (
			<div className={classes.root}>
				<div className={classes.container}>
					<nav className={classes.nav}>
						<h1 className={classes.title}>Color Palette Creator</h1>
						<Link to='/palette/new'>Create A New Palette</Link>
					</nav>
					<TransitionGroup className={classes.palettes}>
						{palette.map((palette) => (
							<CSSTransition
								key={palette.id}
								classNames='fade'
								timeout={500}
							>
								<MiniPalette
									{...palette}
									goToPalette={this.goToPalette}
									deletePaletteById={this.toggleDialog}
									key={palette.id}
									id={palette.id}
								/>
							</CSSTransition>
						))}
					</TransitionGroup>
				</div>
				<Dialog
					open={deleteDialog}
					aria-labelledby='delete-dialog-title'
					onClose={this.toggleDialog}
				>
					<DialogTitle id='delete-dialog-title'>
						Delete This Palette?
					</DialogTitle>
					<List>
						<ListItem button onClick={this.handelDelete}>
							<ListItemAvatar>
								<Avatar
									style={{
										backgroundColor: blue[100],
										color: blue[600],
									}}
								>
									<CheckIcon />
								</Avatar>
							</ListItemAvatar>
							<ListItemText>Delete</ListItemText>
						</ListItem>
						<ListItem button onClick={this.toggleDialog}>
							<ListItemAvatar>
								<Avatar
									style={{
										backgroundColor: red[100],
										color: red[600],
									}}
								>
									<CloseIcon />
								</Avatar>
							</ListItemAvatar>
							<ListItemText>Cancel</ListItemText>
						</ListItem>
					</List>
				</Dialog>
			</div>
		);
	}
}
export default withStyles(styles)(PaletteList);
