import React, { Component } from 'react' //, PropTypes
import { render } from 'react-dom'

export default class App extends Component {
	componentDidMount() {
		this.updateCanvas();
	}

	updateCanvas() {
		console.log('Load!');
	}

	render() {
		return (
			<canvas ref='canvas' width={500} height={500}></canvas>
		);
	}
}

render(<App />,	document.getElementById('root'));