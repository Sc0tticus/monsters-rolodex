import React from 'react';

import './card-list.styles.css';

// creating a functional component below
// components take in props as arguments
// props is an object

export const CardList = props => {
	console.log(props);

	return <div className="card-list">{props.children}</div>;
};
