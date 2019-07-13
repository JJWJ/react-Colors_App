import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Palette from './Palette';
import seedColors from './seedColors';
import SingleColorPalette from './SingleColorPalette';
import { generatePalette } from './ColorHelpers';
import PaletteList from './PaletteList';
import NewPaletteForm from './NewPaletteForm';

class App extends Component {
	constructor (props) {
		super(props);
		const localPalettes = JSON.parse(window.localStorage.getItem('palettes'));
		this.state = { palettes: localPalettes || seedColors };
		this.savePalette = this.savePalette.bind(this);
		this.findPalette = this.findPalette.bind(this);
		this.deletePaletteById = this.deletePaletteById.bind(this);
	}
	findPalette (id) {
		return this.state.palettes.find(function (palette){
			return palette.id === id;
		});
	}

	savePalette (newPalette) {
		this.setState(
			{
				palettes : [
					...this.state.palettes,
					newPalette,
				],
			},
			this.syncLocalStorage,
		);
	}
	syncLocalStorage () {
		window.localStorage.setItem('palettes', JSON.stringify(this.state.palettes));
	}

	deletePaletteById (id) {
		this.setState(
			(st) => ({ palettes: st.palettes.filter((palette) => palette.id !== id) }),
			this.syncLocalStorage,
		);
	}
	render () {
		return (
			<Switch>
				<Route
					path='/palette/new'
					render={(routeProps) => (
						<NewPaletteForm savePalette={this.savePalette} palettes={this.state.palettes} {...routeProps} />
					)}
				/>
				<Route
					exact
					path='/'
					render={(routeProps) => (
						<PaletteList
							palette={this.state.palettes}
							deletePaletteById={this.deletePaletteById}
							{...routeProps}
						/>
					)}
				/>
				<Route
					exact
					path='/palette/:paletteId'
					render={(routeProps) => (
						<Palette palette={generatePalette(this.findPalette(routeProps.match.params.paletteId))} />
					)}
				/>
				<Route
					exact
					path='/palette/:singlePaletteId/:colorId'
					render={(routeProps) => (
						<SingleColorPalette
							palette={generatePalette(this.findPalette(routeProps.match.params.singlePaletteId))}
							colorId={routeProps.match.params.colorId}
						/>
					)}
				/>
			</Switch>
		);
	}
}

export default App;
