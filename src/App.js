import React from 'react'
import { makeUp } from './components/makeUp'
import { Button } from './components/Button/styles'
import { Alert } from './components/Alert/styles'

function App() {
	return (
		<div style={{ padding: 70 }}>
			<div
				style={{
					height: '400px',
					display: 'flex',
					justifyContent: 'space-between',
					flexDirection: 'column',
				}}
			>
				<makeUp.alert>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
					consequatur?s
				</makeUp.alert>
				<makeUp.alert color="blue">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
					consequatur?s
				</makeUp.alert>
				<makeUp.alert color="green">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
					consequatur?s
				</makeUp.alert>
				<makeUp.alert color="yelloe">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
					consequatur?s
				</makeUp.alert>
				<makeUp.alert color="orange">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
					consequatur?s
				</makeUp.alert>
			</div>
			<br />
			<Alert color="green">Holassss</Alert>
			<br />
			<makeUp.alert tag="article" color="red">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
				consequatur?s
			</makeUp.alert>
			{''}
			<br />
			<Button color="red" as="a" block>
				Values
			</Button>
			<Button color="blue" lg>
				Values
			</Button>
			<Button color="yellow" as="a" href="#" lg>
				Values
			</Button>
			<br />
			{''}
			<div>
				<makeUp.button>Button</makeUp.button>
				<makeUp.button tag="a" bgColor="bg-blue-darken-4">
					Button
				</makeUp.button>
				<makeUp.button color="blue" w100="w-100">
					Button
				</makeUp.button>
				<makeUp.button color="green">Button</makeUp.button>
				<makeUp.button color="yellow">Button</makeUp.button>
				<makeUp.button color="orange">Button</makeUp.button>
				<makeUp.button color="red">Button</makeUp.button>
				<makeUp.outlineButton color="red">Button</makeUp.outlineButton>
				<makeUp.outlineButton color="blue">Button</makeUp.outlineButton>
				<makeUp.outlineButton color="green" w100="w-100">
					Button
				</makeUp.outlineButton>
				<makeUp.outlineButton outlineColor="bg-green">Button</makeUp.outlineButton>

				<makeUp.outlineButton size="sm" color="red">
					Button
				</makeUp.outlineButton>
				<makeUp.outlineButton size="lg" color="blue">
					Button
				</makeUp.outlineButton>
				<makeUp.outlineButton size="sm" color="green">
					Button
				</makeUp.outlineButton>
				<makeUp.outlineButton size="sm" color="yellow">
					Button
				</makeUp.outlineButton>
			</div>
			<br />
			<makeUp.button bgColor="bg-red-darken-1" hoverBgColor={'bg-orange-darken-3'}>
				Button
			</makeUp.button>
			<br />
			<br />
			<makeUp.button color="yellow" size="lg">
				Im a buttom
			</makeUp.button>
			<br />
			<br />
			<button className="button-lg">Im a buttom</button>
			<div className="alert bg-green-lighten-7 rounded-sm text-green-darken-4 border-green-lighten-6">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
				consequatur?s
			</div>
			{''}
			<div className="alert bg-yellow-lighten-7 rounded-sm text-yellow-darken-4 border-yellow-lighten-6">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
				consequatur?s
			</div>
			{''}
			<div className="alert bg-orange-lighten-7 rounded-sm text-orange-darken-4 border-orange-lighten-6">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
				consequatur?s
			</div>
			{''}
			<div className="alert bg-red-lighten-7 rounded-sm text-red-darken-4 border-red-lighten-6">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
				consequatur?s
			</div>
		</div>
	)
}

export default App
