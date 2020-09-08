import React from 'react'
import { colors } from '../../data'
const tags = {
	div: 'div',
	article: 'article',
	section: 'section',
	header: 'header',
	footer: 'footer',
}

const Alert = ({
	tag = 'div',
	color = 'purple',
	className = '',
	bgColor,
	textColor,
	borderColor,
	children,
}) => {
	tag = tags[tag] || 'div'
	color = colors[color] || 'purple'
	bgColor = bgColor || `bg-${color}-lighten-7`
	textColor = textColor || `text-${color}-darken-4`
	borderColor = borderColor || `border-${color}-lighten-6`
	return React.createElement(
		tag,
		{
			className: `alert ${bgColor} ${textColor} ${borderColor} rounded-sm ${className}`,
			role: 'alert',
		},
		children
	)
}

export default Alert
