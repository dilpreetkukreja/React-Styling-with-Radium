import React from 'react';
import './App.css';
import ComponentA from './ComponentA/ComponentA';
import Radium, { StyleRoot } from 'radium';

function App() {
  return (
  	<StyleRoot>
	    <div className="App">
	      <ComponentA />
	    </div>
	</StyleRoot>
  );
}

export default App;
