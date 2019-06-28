import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Palette from './Palette';
import seedColors from './seedColors';
import { generatePalette } from './ColorHelpers';

function App (){
	return (
		<Switch>
			<Route exact path='/' render={() => <h1>Palette</h1>} />
			<Route exact path='/palette/:paletteId' render={() => <h1>Individual Palette</h1>} />
		</Switch>
		// <div>
		// 	<Palette palette={generatePalette(seedColors[4])} />
		// </div>
	);
}

export default App;
