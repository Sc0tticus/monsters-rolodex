import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// By using a class component we get access to State
// State is a JS object with properties that we can access at any point withing out class
// start off with the constructor() {
// super();
// }

// class components also give us access to set State which allows us to modify the state object in this component.
// On every single HTML element we have access to a property called onClick which takes a function that gets called
// whenever that element gets clicked.

// this.setState is object that takes in all of the properties that you want to change.
class App extends Component {
	constructor() {
		super();

		this.state = {
			string: 'Hello Scott, my dude'
		};
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<p>{this.state.string}</p>
					<button onClick={() => this.setState({ string: 'React is a State ofMind()' })}>Change Text</button>
				</header>
			</div>
		);
	}
}

export default App;
