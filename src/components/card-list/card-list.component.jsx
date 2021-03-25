import React from 'react';
import { Card } from '../card/card.component';
import './card-list.styles.css';

// creating a functional component below
// components take in props as arguments
// props is an object

export const CardList = props => (
	<div className="card-list">
		{props.monsters.map(monster => (
			<Card key={monster.id} monster={monster} />
		))}
	</div>
);
