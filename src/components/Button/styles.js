import styled, { css } from 'styled-components'
import { makeUpColors } from '../../data'

const darkenForHover = (color) => {
	if (!makeUpColors[color]) return makeUpColors['purple-darken-2']
	const parts = color.split('-')
	if (parts.length === 1) {
		const darkenColor = `${color}-darken-1`
		return makeUpColors[darkenColor]
	}

	if (parts.length === 3) {
		if (parts[1] === 'darken') {
			const darkenColor = `${parts[0]}-darken-${Number(parts[2]) + 1}`
			return makeUpColors[darkenColor] || color
		}
		if (parts[1] === 'lighten') {
			if (parts[2] === '1') return makeUpColors[parts[0]]
			const lightenColor = `${parts[0]}-lighten-${Number(parts[2]) - 1}`
			return makeUpColors[lightenColor] || color
		}
	}
}

const lightenForFocus = (color) => {
	if (!makeUpColors[color]) return makeUpColors['purple-lighten-2']
	const parts = color.split('-')
	if (parts.length === 1) {
		const lightenColor = `${color}-lighten-2`
		return makeUpColors[lightenColor]
	}

	if (parts.length === 3) {
		if (parts[1] === 'lighten') {
			const lightenColor = `${parts[0]}-lighten-${Number(parts[2]) + 2}`
			return makeUpColors[lightenColor] || color
		}
		if (parts[1] === 'darken') {
			const darkenColor = `${parts[0]}-darken-${Number(parts[2]) - 2}`
			return makeUpColors[darkenColor] || color
		}
	}
}

export const Button = styled.button`
	border: none;
	border-radius: 8px;
	font-size: 16px;
	line-height: 20px;
	padding: 8px 12px;
	text-decoration: none;
	cursor: pointer;
	transition: all ease 0.3s;
	background-color: ${(props) =>
		(props.color && makeUpColors[props.color]) || makeUpColors.purple};
	color: ${(props) => (props.color === 'yellow' ? '#111' : 'white')};
	display: inline-block;
	:hover {
		background-color: ${(props) =>
			(props.hoverColor && makeUpColors[props.hoverColor]) ||
			darkenForHover(props.color) ||
			makeUpColors['purple-darken-2']};
	}
	:focus {
		box-shadow: 0 0 0 0.15rem
			${(props) =>
				(props.focusShadowColor && makeUpColors[props.focusShadowColor]) ||
				lightenForFocus(props.color) ||
				makeUpColors['purple-lighten-2']};
	}
	${(props) =>
		props.block &&
		css`
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100%;
		`}
  ${(props) =>
			props.sm &&
			css`
				padding: 4px 8px;
				font-size: 14px;
			`}
  ${(props) =>
			props.lg &&
			css`
				padding: 12px 16px;
				font-size: 20px;
			`}
`
