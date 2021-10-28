import Link from 'next/link';
import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const buttonBgColors = {
	lightBlue : 'bg-blue-300',
	blue : 'bg-blue-500',
	darkBlue : 'bg-blue-800',
	yellow : 'bg-yellow-500'
}
const buttonActiveColors = []

const buttonHoverColors = []

const buttonFocusColors	= []

const outlinedBorderColors = {
	lightBlue : 'border-blue-300',
	blue : 'border-blue-500',
	darkBlue : 'border-blue-800',
	yellow : 'border-yellow-500'
}

const outlinedTextColors = {
	lightBlue : 'text-blue-300',
	blue : 'text-blue-500',
	darkBlue : 'text-blue-800',
	yellow : 'text-yellow-500'
}

const outlinedHoverColors = {
	lightBlue : 'hover:bg-blue-300',
	blue : 'hover:bg-blue-300',
	darkBlue : 'hover:bg-blue-300',
	yellow : 'hover:bg-blue-300'
}

const outlinedFocusColors = []

const Button = forwardRef((
	{
		label,
		type,
		variant,
		className,
		size,
		color,
		href,
		disabled,
		...props
	}, ref
) => {
	let classes = [];

        // rounded = rounded ? 'rounded-full' : 'rounded-lg';

        const sharedClasses = [
            'flex',
            'items-center',
            'justify-center',
            'gap-1',
            'font-bold',
            'outline-none',
            'uppercase',
            'tracking-wider',
            'focus:outline-none',
            'focus:shadow-none',
            'transition-all',
            'duration-300',
        ];

        const buttonFilled = [
            'text-white',
            buttonBgColors[color],
        ];

        const buttonOutline = [
            'bg-transparent',
            'border',
            'border-solid',
            'shadow-none',
			// 'hover:bg-blue-300',
			outlinedBorderColors[color],
			outlinedTextColors[color],
			outlinedHoverColors[color]
        ];

        const buttonLink = [
            `bg-transparent`,
        ];

        const buttonSmall = [
            ...sharedClasses,
            'text-sm',
            'leading-normal',
			'py-2 px-4'
        ];
        const buttonMedium = [
            ...sharedClasses,
            'leading-normal',
			'py-2.5 px-8'
        ];
        const buttonLarge = [
            ...sharedClasses,
            'text-sm',
            'leading-relaxed',
			'py-3 px-12 text-lg'
        ];

        if (size === 'large') {
            classes.push(...buttonLarge);
        } else if (size === 'medium') {
            classes.push(...buttonMedium);
        } else {
            classes.push(...buttonSmall);
        }

        if (variant === 'outline') {
            classes.push(...buttonOutline);
        } else if (variant === 'link') {
            classes.push(...buttonLink);
        } else {
            classes.push(...buttonFilled);
        }

        classes = classes.join(' ');

	return (
		<Link
			href={href}
		>
			<button
				ref={ref}
				disabled={disabled}
				type={type}
				className={classNames(`${classes} ${className}`)}
				{...props}
			>{label}</button>
		</Link>
	)
})

Button.defaultProps = {
	label : 'button',
	href: '#',
	variant: 'outlined',
	color : 'blue',
	constiant : 'button'
}

Button.propTypes = {
	label: PropTypes.node.isRequired,
	type: PropTypes.oneOf(['button', 'submit', 'reset']),
	className: PropTypes.object,
	size: PropTypes.oneOf(['small', 'medium', 'large']),
	color: PropTypes.string,
	href: PropTypes.string,
	disabled: PropTypes.bool,
}

export default Button