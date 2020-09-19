import React from 'react';
import {Component} from 'react';
import Quote from './Quote';

import './App.css';

class App extends Component {
	render (){
		var textStyle = {
			color: 'white',
		    position: 'absolute', 
		    top: '50%',
  			left: '50%',
  			transform: 'translate(-50%, -50%)'
        };
	return (
	<div >
 	<img src='https://source.unsplash.com/random' alt='backgrounds' style={{height: '100%', width:'100%'}}/>
 	 <h1 style={textStyle}><Quote /></h1>
 	</div>
  )
}
}
export default App;
