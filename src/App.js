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
		this.state = { palettes: seedColors };
		this.savePalette = this.savePalette.bind(this);
		this.findPalette = this.findPalette.bind(this);
	}
	findPalette (id) {
		return this.state.palettes.find(function (palette){
			return palette.id === id;
		});
	}

	savePalette (newPalette) {
		this.setState({
			palettes : [
				...this.state.palettes,
				newPalette,
			],
		});
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
					render={(routeProps) => <PaletteList palette={this.state.palettes} {...routeProps} />}
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
