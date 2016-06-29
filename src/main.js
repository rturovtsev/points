import React, { Component } from 'react' //, PropTypes
import { render } from 'react-dom'
import Canvas from './components/canvas';

export default class App extends Component {
	render() {
		return (
			<Canvas/>
		);
	}
}

render(<App />,	document.getElementById('root'));