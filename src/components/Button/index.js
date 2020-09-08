import React, { useState, useMemo } from 'react'
import { colors } from '../../data'

export const tags = {
	button: 'button',
	a: 'a',
}
const sizes = {
	sm: 'button-sm',
	lg: 'button-lg',
}

const bgDarkenHover = (bgColor) => {
	const parts = bgColor.split('-')
	if (parts.length === 2) {
		return `${parts.join('-')}-darken-1`
	} else if (parts.length === 4) {
		const num = Number(parts[3]) > 5 ? 5 : Number(parts[3])
		return `${parts[0]}-${parts[1]}-${parts[2]}-${num === 5 ? num : num + 1}`
	}
	return `bg-purple-darken-2`
}
const outlineForHover = (outlineColor) => {
	const parts = outlineColor.split('-')
	if (parts.length === 2) {
		return [`bg-${parts[1]}`, `text-${parts[1]}`, `border-${parts[1]}`]
	} else if (parts.length === 4) {
		return [
			`bg-${parts[1]}-${parts[2]}-${parts[3]}`,
			`text-${parts[1]}-${parts[2]}-${parts[3]}`,
			`border-${parts[1]}-${parts[2]}-${parts[3]}`,
		]
	}
	return [`bg-purple`, `text-purple`, `border-purple`]
}
const activeColorShadow = (color) => {
	const parts = color.split('-')
	if (parts.length === 2) {
		return `active-${parts[1]}-lighten-2`
	} else if (parts.length === 4) {
		const num = Number(parts[3]) > 5 ? 5 : Number(parts[3])
		const type =
			(parts[2] === 'lighten' && 'lighten') ||
			(parts[2] === 'darken' && 'darken') ||
			null

		if (type === 'lighten') {
			return `active-${parts[1]}-${type}-${
				(num >= 7 && 7) || (num === 6 && 7) || num + 2
			}`
		} else if (type === 'darken') {
			if (num === 2) {
				return `active-${parts[1]}`
			}
			return `active-${parts[1]}-${type}-${
				(num >= 5 && 3) || (num === 4 && 2) || 1
			}`
		}

		return [
			`bg-${parts[1]}-${parts[2]}-${parts[3]}`,
			`text-${parts[1]}-${parts[2]}-${parts[3]}`,
			`border-${parts[1]}-${parts[2]}-${parts[3]}`,
		]
	}
	return `active-purple-lighten-2`
}

const Button = ({
	tag = 'button',
	color = 'purple',
	className = '',
	href = null,
	bgColor,
	bgColorHover,
	borderColor,
	activeColor = null,
	size,
	w100,
	children,
}) => {
	tag = tags[tag] || 'button'
	color = colors[color] || 'purple'
	href = tag === 'button' ? null : href
	bgColor = bgColor || `bg-${color}`
	borderColor = borderColor || `border-${color}-lighten-6`
	size = sizes[size] || 'button'
	const textColor = color === 'yellow' ? 'text-black' : 'text-white'
	const bgDarken = useMemo(() => bgDarkenHover(bgColor), [bgColor])
	const bgColorDarken = bgColorHover || bgDarken
	const activeShadow = useMemo(() => activeColorShadow(bgColor), [bgColor])
	const active = activeColor || activeShadow
	const [bg, setBg] = useState(bgColor)
	const mouseEnter = () => setBg(bgColorDarken)
	const mouseLeave = () => setBg(bgColor)
	return React.createElement(
		tag,
		{
			className: `${size} ${bg} ${textColor} rounded-sm ${active} ${
				w100 === 'w-100' && 'w-100'
			} ${className}`,
			onMouseEnter: mouseEnter,
			onMouseLeave: mouseLeave,
			role: 'button',
			href: href && href,
		},
		children
	)
}

export const OutlineButton = ({
	tag = 'button',
	color = 'purple',
	className = '',
	href = null,
	outlineColor,
	activeColor = null,
	size,
	w100,
	children,
}) => {
	tag = tags[tag] || 'button'
	color = colors[color] || 'purple'
	href = tag === 'button' ? null : href
	outlineColor = outlineColor || `border-${color}`
	size = sizes[size] || 'button'
	const [bgHover, textColor, borderColor] = useMemo(
		() => outlineForHover(outlineColor),
		[outlineColor]
	)
	const textColorHover = color === 'yellow' ? 'text-black' : 'text-white'
	const activeShadow = useMemo(() => activeColorShadow(outlineColor), [
		outlineColor,
	])
	const active = activeColor || activeShadow
	const [bg, setBg] = useState('bg-transparent')
	const [text, setText] = useState(textColor)

	const mouseEnter = () => {
		setBg(bgHover)
		setText(textColorHover)
	}
	const mouseLeave = () => {
		setBg('bg-transparent')
		setText(textColor)
	}
	return React.createElement(
		tag,
		{
			className: `${size} ${bg} ${text} ${borderColor} rounded-sm ${active} ${
				w100 === 'w-100' && 'w-100'
			} ${className}`,
			onMouseEnter: mouseEnter,
			onMouseLeave: mouseLeave,
			role: href && 'button',
			href: href && href,
		},
		children
	)
}

export default Button
