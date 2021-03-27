#The Job of a React Developer

1. Decide on Components
2. Decide the State and where it lives
3. What changes when state changes

-The benefit of React is breaking up UI into smaller components to allow easier debuggability.
-Each component does one thing and one thing reall well. Single responsibility principle.
-Seperate components by concerns.

#State vs Props
-App.js is the parent component that surrounds everythign in our app so far.
-State lives in App.js and we pass state down to our <CardList /> component as an attribute to the component as monsters. As soon as we pass state down to the component
the component receives it as a prop.
-State changes because of user interaction. When click refresh on a page we update the state monsters: [] from an empty array to being filled in with users.
-this.state trickles down our component tree as props to whoever needs it.

-React has one way or unidirectional data flow

let state = {
user: 'Scott Singer',
isLoggedIn: True,
friends: ['Brett', 'Brandon', 'Eric']
}

-App component lives as the top of the state tree as the parent component. State lives in the parent component and if something in the state changes the state change
will trickle down to whatever component cares about it. We pass state down as an attribute. The state gets turned into props.
-State usually lives in only one location and trickles down as props.
-State turns into props as it gets passed down from App to CardList.
-Key is used by React to distinguish when mutiple componets are rendered together.
-React uses the Key attribute to identify which card to update in the DOM.
-React devTools is useful to see how info is being passed down.

The keys to being a great React developer:

1. Decide on Components.
2. Decide the State and where it lives.
3. What changes when state changes.

-We can put state wherever we want.
-Whenver state changes we will have to re-run functions.
-Anytime we introduce state or data into our app that data gets passed down as props.

#Lesson #37
-So far in the application:

1.  We are performing an API call in componentDidMount to retrieve users when we initially load the page with our JS, CSS, and HTML file. create-react-app simulates a fake server that sends the JS, CSS, and HTML files.
2.  We get the users, and then gets each image of monsters from the Robohash API. This all we have built so far.

Creating SearchField component: -<input type="search" placeholder="search monsters" />, search type attribute allows us use the placeholder attribute to have text be a placeholder.

#Synchronous vs Asynchronous
-Synchronous: happens almost immediatedly, it happens when JS knows how much time it will take, JS will wait for the event to finish before running the rest of the code.
-Asynchronous: action or event, takes an indefinite amount time that JS does not know. JS runs the rest of the code after and when the async event finishes, it runs the finished event.
-this.setState does not happen immediately.

#Synthetic Events
-when a DOM event happens, when a user clicks or types something in an input, React intercepts that something has changed, and tells the React app something has changed. A synthetic event is a fake event.
-onChange is camelcase, receives the event, and updates the state.  
-state gets updated in the App when a user changes something, via a user action.

#State
-information flows down, changes flow up.
-event handlers send actions up to the parent that something has happened and state needs to be updated.
-you want state to live in a high enough position to where you can still pass down information to different nodes.

#This
-"this" is a special keyword in JS that references the context in which it's being invoked.
-this.state means you are trying to reference the state on your class component.
"this" keyword gets bound inside of the lifecycle and render methods because when we call super() we are extending the functionality that exists on Component that we get from React, which has the lifecycle methods and render.
-we borrow these methods from Component

#App.js notes
// as soon as state changes, the component gets re-rendered to update to the new state.
// we need to take control whenever the user types something into the input, because we want to store that string on our state.
// By storing it on our state we'll be able to actually use it to filter out our monsters.
// we have access to the onChange method, which fires with a synthetic event, which is just an event in our browser.
// So whenver the input is changed like when the user types or removes anything.
// Whenver the value in that input changes, the onChange event fires.
// value is a property on the input that will give a string value
// setState is an asynchronous function call.
// add a callback for after setState has finished. Have to console.log in the callback function, which is a second argument
// after setState.
// React internally recogniges onChange and when something changes internally related to onChange, React will just run
// that function.
// React figures out the best time to update the DOM internally and will batch events.

    // Destructuring allows us to pull properties off an object and set them to
    // .includes() checks to see if the string values passed in matches anything.

    // the above is the equivalent to saying: const monsters = this.state.monsters;
    // const searchField = this.state.searchField.

    // Component is actually re-rendering each time because whenever set state is called and the properties change,
    // React re-renders the component, the filteredMonsters method gets called again.

    // this.setState gets triggered everytime a user types something in, which in turn sets the state value for searchField,
    // which then in turn causes our component to re-render and recall the render method, which then re-filters out the monsters
    // by calling our monsters.filter which then sets a new array, which then gets passed to our CardList, which then re-renders
    // CardList.
    // React is able to take control of what to render and re-render automatically.

-Define state within the constructor because it runs first before anything gets called.

-.bind() is a handle on any function that returns a new function, where the context of "this" is set
to whatever we passed to it.

-=> arrow functions automatically allow you to set "this" when "this" is defined.

Quick Note: Binding in React
In the previous video, we learned about arrow functions and binding in React. A good rule of thumb is this: Use arrow functions on any class methods you define and aren't part of React (i.e. render(), componentDidMount()).

If you want to learn more about this, have a read here: https://reactjs.org/docs/handling-events.html

// functional components don't have access to state because they don't have access to constructor
// constructor() is a class method on our component that we import from React, that we extend our class from.
// Functional components also don't have access to life-cycle methods. They don't have internal state or lifecycle methods.
// Sometimes all we want to do is render some HTML, a funcitonal component get some props and return some HTML.
// If you don't need internal state/lifecycle methods, use a functional component.

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
