import styled, { css } from 'styled-components'
import { makeUpColors } from '../../data'

export const Alert = styled.div`
	padding: 12px 20px;
	width: 100%;
	border-radius: 8px;
	background-color: ${(props) =>
		(props.bgColor && makeUpColors[props.bgColor]) ||
		makeUpColors[`${props.color}-lighten-7`] ||
		makeUpColors[`purple-lighten-7`]};
	color: ${(props) =>
		(props.textColor && makeUpColors[props.textColor]) ||
		makeUpColors[`${props.color}-darken-4`] ||
		makeUpColors[`purple-darken-4`]};
	border: 1px solid
		${(props) =>
			(props.borderColor && makeUpColors[props.borderColor]) ||
			makeUpColors[`${props.color}-lighten-6`] ||
			makeUpColors[`purple-lighten-6`]};
`
