import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// By using a class component we get access to State
// State is a JS object with properties that we can access at any point withing out class
// start off with the constructor() {
// super();
// }

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
					<button>Change Text</button>
				</header>
			</div>
		);
	}
}

export default App;
