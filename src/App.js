import React, { useState } from 'react';

import Icon from './components/Icon';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Card, CardBody, Container, Button, Col, Row } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

const itemArray = new Array(9).fill('empty');

const App = () => {
	const [ isCross, setIsCross ] = useState(false);
	const [ winMsg, setWinMsg ] = useState('');

	const reloadGame = () => {
		setIsCross(false);
		setWinMsg('');
		itemArray.fill('empty', 0, 9);
	};

	const checkIsWinner = () => {
		if (itemArray[0] !== 'empty' && itemArray[0] === itemArray[1] && itemArray[1] === itemArray[2]) {
			setWinMsg(`${itemArray[0]} wins`);
		} else if (itemArray[3] !== 'empty' && itemArray[3] === itemArray[4] && itemArray[4] === itemArray[5]) {
			setWinMsg(`${itemArray[3]} wins`);
		} else if (itemArray[6] !== 'empty' && itemArray[6] === itemArray[7] && itemArray[7] === itemArray[8]) {
			setWinMsg(`${itemArray[6]} wins`);
		} else if (itemArray[0] !== 'empty' && itemArray[0] === itemArray[3] && itemArray[3] === itemArray[6]) {
			setWinMsg(`${itemArray[0]} wins`);
		} else if (itemArray[1] !== 'empty' && itemArray[1] === itemArray[4] && itemArray[4] === itemArray[7]) {
			setWinMsg(`${itemArray[1]} wins`);
		} else if (itemArray[2] !== 'empty' && itemArray[2] === itemArray[5] && itemArray[5] === itemArray[8]) {
			setWinMsg(`${itemArray[2]} wins`);
		} else if (itemArray[0] !== 'empty' && itemArray[0] === itemArray[4] && itemArray[4] === itemArray[8]) {
			setWinMsg(`${itemArray[0]} wins`);
		} else if (itemArray[2] !== 'empty' && itemArray[2] === itemArray[4] && itemArray[4] === itemArray[6]) {
			setWinMsg(`${itemArray[2]} wins`);
		}
	};

	const changeItem = (itemNumber) => {
		if (winMsg) {
			return toast(winMsg.toUpperCase(), { type: 'success', hideProgressBar: true, autoClose: 3000 });
		}
		if (itemArray[itemNumber] === 'empty') {
			itemArray[itemNumber] = isCross ? 'cross' : 'circle';
			setIsCross(!isCross);
		} else {
			return toast('ALREADY FILLED', { type: 'error', hideProgressBar: true, autoClose: 1500 });
		}
		checkIsWinner();
	};

	return (
		<Container className="p-5">
			<ToastContainer position="bottom-center" />
			<Row>
				<Col md={6} className="offset-md-3">
					{winMsg ? (
						<div className="mb-2 mt-2">
							<h1 className="text-success text-uppercase text-center">{winMsg}</h1>
							<Button color="success" block onClick={reloadGame}>
								Reload the game
							</Button>
						</div>
					) : (
						<h2 className="text-center text-warning">{isCross ? "CROSS'S" : "CIRCLE'S"} TURN</h2>
					)}
					{winMsg ? null : itemArray.includes('empty') ? null : (
						<div>
							{setWinMsg('GAME DRAWN')}
							<div className="mb-2 mt-2">
								<Button color="success" block onClick={reloadGame}>
									Reload the game
								</Button>
							</div>
						</div>
					)}
					<div className="grid">
						{itemArray.map((item, index) => (
							<Card color="secondary" onClick={() => changeItem(index)}>
								<CardBody className="box">
									<Icon name={item} />
								</CardBody>
							</Card>
						))}
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default App;
