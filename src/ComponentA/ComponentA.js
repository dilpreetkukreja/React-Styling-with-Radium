import React from 'react';
import Radium from 'radium';

function ComponentA(){
	let styles = {
		color: 'green',
		width:'40%',
		margin:'auto',
		':hover': {
			backgroundColor: 'pink'
		},
		'@media screen and (min-width:800px)':{
			color: 'red'
		}
	}
	return (
		<div style={styles}>
			<p>I'm paragraph</p>
		</div>
	);
}

export default Radium(ComponentA);