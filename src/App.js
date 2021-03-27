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
			monsters: [],
			searchField: ''
		};
	}

	// The user URL below is an API
	// We are performing an API call in componentDidMount to retrieve users when we initially load the page.

	componentDidMount() {
		//A fetch returns a promise, and the promise gives us a response of the actual body
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => this.setState({ monsters: users }));
	}

	// as soon as state changes, the component gets re-rendered to update to the new state.
	// we need to take control whenever the user types something into the input, because we want to store that string on our state.
	// By storing it on our state we'll be able to actually use it to filter out our monsters.
	// we have access to the onChange method, which fires with a synthetic event, which is just an event in our browser.
	// So whenver the input is changed  like when the user types or removes anything.
	// Whenver the value in that input changes, the onChange event fires.
	// value is a property on the input that will give a string value
	// setState is an asynchronous function call.

	render() {
		return (
			<div className="App">
				<input
					type="search"
					placeholder="search monsters"
					onChange={e => {
						this.setState({ searchField: e.target.value });
						console.log(this.state);
					}}
				/>
				<CardList monsters={this.state.monsters}></CardList>
			</div>
		);
	}
}

export default App;
