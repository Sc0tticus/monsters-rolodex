import React from 'react';

import './card-list.styles.css';

// creating a functional component below
// components take in props as arguments
// props is an object

export const CardList = props => (
	<div className="card-list">
		{props.monsters.map(monster => (
			<h1 key={monster.id}>{monster.name}</h1>
		))}
	</div>
);
