// React Imports
import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Route, Switch } from 'react-router-dom';
// View Imports
import Palette from './Palette';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';
import NewPaletteForm from './NewPaletteForm';
import { generatePalette } from './ColorHelpers';
import Page from './Page';
// Data Import
import seedColors from './seedColors';

class App extends Component {
	constructor(props) {
		super(props);
		const localPalettes = JSON.parse(
			window.localStorage.getItem('palettes'),
		);
		this.state = { palettes: localPalettes || seedColors };
		this.savePalette = this.savePalette.bind(this);
		this.findPalette = this.findPalette.bind(this);
		this.deletePaletteById = this.deletePaletteById.bind(this);
	}
	findPalette(id) {
		return this.state.palettes.find(function(palette) {
			return palette.id === id;
		});
	}

	savePalette(newPalette) {
		this.setState(
			{
				palettes: [ ...this.state.palettes, newPalette ],
			},
			this.syncLocalStorage,
		);
	}
	syncLocalStorage() {
		window.localStorage.setItem(
			'palettes',
			JSON.stringify(this.state.palettes),
		);
	}

	deletePaletteById(id) {
		this.setState(
			(st) => ({
				palettes: st.palettes.filter((palette) => palette.id !== id),
			}),
			this.syncLocalStorage,
		);
	}
	render() {
		return (
			<Route
				render={({ location }) => (
					<TransitionGroup>
						<CSSTransition
							key={location.key}
							classNames='page'
							timeout={500}
						>
							<Switch location={location}>
								<Route
									path='/palette/new'
									render={(routeProps) => (
										<Page>
											<NewPaletteForm
												savePalette={this.savePalette}
												palettes={
													this.state.palettes.length >
													0 ? (
														this.state.palettes
													) : (
														seedColors
													)
												}
												{...routeProps}
											/>
										</Page>
									)}
								/>
								<Route
									exact
									path='/'
									render={(routeProps) => (
										<Page>
											<PaletteList
												palette={this.state.palettes}
												deletePaletteById={
													this.deletePaletteById
												}
												{...routeProps}
											/>
										</Page>
									)}
								/>
								<Route
									exact
									path='/palette/:paletteId'
									render={(routeProps) => (
										<Page>
											<Palette
												palette={generatePalette(
													this.findPalette(
														routeProps.match.params
															.paletteId,
													),
												)}
											/>
										</Page>
									)}
								/>
								<Route
									exact
									path='/palette/:singlePaletteId/:colorId'
									render={(routeProps) => (
										<Page>
											<SingleColorPalette
												palette={generatePalette(
													this.findPalette(
														routeProps.match.params
															.singlePaletteId,
													),
												)}
												colorId={
													routeProps.match.params
														.colorId
												}
											/>
										</Page>
									)}
								/>
								<Route
									render={(routeProps) => (
										<Page>
											<PaletteList
												palette={this.state.palettes}
												deletePaletteById={
													this.deletePaletteById
												}
												{...routeProps}
											/>
										</Page>
									)}
								/>
							</Switch>
						</CSSTransition>
					</TransitionGroup>
				)}
			/>
		);
	}
}

export default App;
