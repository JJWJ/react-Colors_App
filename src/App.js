import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Palette from './Palette';
import seedColors from './seedColors';
import { generatePalette } from './ColorHelpers';

class App extends Component {
	findPalette (id) {
		return seedColors.find(function (palette){
			return palette.id === id;
		});
	}
	render () {
		return (
			<Switch>
				<Route exact path='/' render={() => <h1>Palette</h1>} />
				<Route
					exact
					path='/palette/:paletteId'
					render={(routeProps) => (
						<Palette palette={generatePalette(this.findPalette(routeProps.match.params.paletteId))} />
					)}
				/>
			</Switch>
		);
	}
}

export default App;
