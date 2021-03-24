import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component.jsx';
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
// this.setState gives us a lot of control over what we want our components to Display.
class App extends Component {
	constructor() {
		super();

		this.state = {
			monsters: []
		};
	}

	componentDidMount() {
		//A fetch returns a promise, and the promise gives us a response of the actual body
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => this.setState({ monsters: users }));
	}

	// as soon as state changes, the component gets re-rendered to update to the new state.
	render() {
		return (
			<div className="App">
				<CardList name="Scott" />
				{this.state.monsters.map(monster => (
					<h1 key={monster.id}>{monster.name}</h1>
				))}
			</div>
		);
	}
}

export default App;
