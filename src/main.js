import React, { Component } from 'react' //, PropTypes
import { render } from 'react-dom'

export default class App extends Component {
	componentDidMount() {
		this.updateCanvas();
	}

	updateCanvas() {
		const canvas = this.refs.canvas,
			ctx = canvas.getContext('2d');

		let width = 700,
			height = 500;

		canvas.width = width;
		canvas.height = height;

		ctx.strokeRect(0, 0, width, height);
	}

	render() {
		return (
			<canvas ref='canvas'></canvas>
		);
	}
}

render(<App />,	document.getElementById('root'));