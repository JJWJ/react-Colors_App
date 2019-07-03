import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Palette from './Palette';
import seedColors from './seedColors';
import SingleColorPalette from './SingleColorPalette';
import { generatePalette } from './ColorHelpers';
import PaletteList from './PaletteList';

class App extends Component {
	findPalette (id) {
		return seedColors.find(function (palette){
			return palette.id === id;
		});
	}
	render () {
		return (
			<Switch>
				<Route exact path='/' render={(routeProps) => <PaletteList palette={seedColors} {...routeProps} />} />
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
