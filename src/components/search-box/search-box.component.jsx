// bable helps transpile down moder JS, including the JSX files that we write into older version of JS into the public folder.
import React from 'react';
import './search-box.styles.css';

// functional components don't have access to state because they don't have access to constructor
// constructor() is a class method on our component that we import from React, that we extend our class from.
// Functional components also don't have access to life-cycle methods. They don't have internal state or lifecycle methods.
// Sometimes all we want to do is render some HTML, a funcitonal component get some props and return some HTML.
// If you don't need internal state/lifecycle methods, use a functional component.

export const SearchBox = ({ placeholder, handleChange }) => (
	<input className="search" type="search" placeholder={placeholder} onChange={handleChange} />
);
