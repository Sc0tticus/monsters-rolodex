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
