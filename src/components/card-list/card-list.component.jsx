import React from 'react';

// creating a functional component below
// components take in props as arguments
// props is an object

export const CardList = props => {
	console.log(props);

	return <div>{props.children}</div>;
};
