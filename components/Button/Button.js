import Link from 'next/link';
import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export function unBorderedButton(){
	return variant === 'link' | variant === 'text'
}

const classes = {
	variant: {
		link: 'border-0 text-blue-400 bg-transparant',
		button: 'border-2 bg-blue-500',
		outlined: 'border-2'
	},
	disabled: 'cursor-not-allowed',
	size: {
		small: 'py-1 px-4 text-sm',
		medium: 'py-1 px-6',
		large: 'py-2 px-12 text-xl'
	},
	color : {
		blue: 'bg-blue-600 text-white',
		green: 'bg-green-600 text-white'
	}
}

const Button = forwardRef((
	{
		label = 'button',
		type = 'button',
		variant = 'button',
		className = '',
		size = 'medium',
		href = '#',
		disabled = false,
		...props
	}, ref
) => (
	<Link
		href={href}
	>
		<button
			ref={ref}
			disabled={disabled}
			type={type}
			className={classNames(`
			${classes.variant[variant]}
			${classes.size[size]}
			${classes.color[color]}
			${disabled && classes.disabled}
			${className}
		`)}
			{...props}
		>{label}</button>
	</Link>
))

Button.propTypes = {
	label: PropTypes.node.isRequired,
	type: PropTypes.oneOf(['button', 'submit', 'reset']),
	className: PropTypes.object,
	size: PropTypes.oneOf(['small', 'medium', 'large']),
	href: PropTypes.string,
	disabled: PropTypes.bool,
}

export default Button