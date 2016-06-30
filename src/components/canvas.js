import React, { Component } from 'react'


//настройки
let width = 700, //ширина
	height = 500, //высота
	lineWidth = 1, //толщина линий
	step = 20, //ширина клетки
	lineColor = '#000', //цвет линий
	bgColor = '#f3f3f3'; //цвет заливки поля


//здесь будем хранить точки
let points = [];

//наполним массив точками
for (let i = step; i < width; i += step) {
	for (let j = step; j < height; j += step) {
		points.push({
			owner: null,
			x: i,
			y: j
		});
	}
}



export default class Canvas extends Component {
	componentDidMount() {
		this.drawField();
		this.drawPoints();
	}

	handlerClick() {
		console.log('click');
	}

	drawField() {
		const canvas = this.refs.canvas,
			ctx = canvas.getContext('2d');

		canvas.width = width;
		canvas.height = height;
		ctx.lineWidth = lineWidth;
		ctx.fillStyle = bgColor;
		ctx.strokeStyle = lineColor;


		//нарисуем поле
		ctx.beginPath();
		ctx.fillRect(0, 0, width, height);
		ctx.strokeRect(0.5, 0.5, width - 1, height - 1);
		ctx.fill();


		//рисуем клетки
		for (let i = step; i < width; i += step) {
			ctx.beginPath();
			ctx.moveTo(i + 0.5, 0);
			ctx.lineTo(i + 0.5, height);
			ctx.stroke();
		}
		for (let i = step; i < height; i += step) {
			ctx.beginPath();
			ctx.moveTo(0, i + 0.5);
			ctx.lineTo(width, i + 0.5);
			ctx.stroke();
		}
	}

	drawPoints() {
		//рисуем пустые точки
		const ctx = this.refs.canvas.getContext('2d');

		for (let i = 0, max = points.length; i < max; i++) {
			ctx.beginPath();
			ctx.arc(points[i].x + 0.5, points[i].y + 0.5, 4, 0, Math.PI * 2, true);

			switch (points[i].owner) {
				case 1:
					ctx.fillStyle = 'red';
					break;
				case 2:
					ctx.fillStyle = 'blue';
					break;
				default:
					ctx.fillStyle = bgColor;
					break;
			}

			ctx.fill()
			ctx.stroke();
		}
	}

	render() {
		return (
			<canvas onClick={this.handlerClick} ref='canvas'></canvas>
		);
	}
}