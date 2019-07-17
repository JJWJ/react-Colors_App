import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Palette from './Palette';
import seedColors from './seedColors';
import SingleColorPalette from './SingleColorPalette';
import { generatePalette } from './ColorHelpers';
import PaletteList from './PaletteList';
import NewPaletteForm from './NewPaletteForm';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './App.css';

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
			<Route
				render={({ location }) => (
					<TransitionGroup>
						<CSSTransition key={location.key} classNames='fade' timeout={500}>
							<Switch location={location}>
								<Route
									path='/palette/new'
									render={(routeProps) => (
										<div className='page'>
											<NewPaletteForm
												savePalette={this.savePalette}
												palettes={this.state.palettes}
												{...routeProps}
											/>
										</div>
									)}
								/>
								<Route
									exact
									path='/'
									render={(routeProps) => (
										<div className='page'>
											<PaletteList
												palette={this.state.palettes}
												deletePaletteById={this.deletePaletteById}
												{...routeProps}
											/>
										</div>
									)}
								/>
								<Route
									exact
									path='/palette/:paletteId'
									render={(routeProps) => (
										<div className='page'>
											<Palette
												palette={generatePalette(
													this.findPalette(routeProps.match.params.paletteId),
												)}
											/>
										</div>
									)}
								/>
								<Route
									exact
									path='/palette/:singlePaletteId/:colorId'
									render={(routeProps) => (
										<div className='page'>
											<SingleColorPalette
												palette={generatePalette(
													this.findPalette(routeProps.match.params.singlePaletteId),
												)}
												colorId={routeProps.match.params.colorId}
											/>
										</div>
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
