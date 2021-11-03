import { forwardRef } from 'react';
import PropTypes from 'prop-types'
import Link from 'next/link';

const bgActiveColor = {
  lightBlue : 'bg-blue-400',
	blue : 'bg-blue-400',
	darkBlue : 'bg-blue-900',
	yellow : 'bg-yellow-800',
	lime : 'bg-lime-700'
}

const bgHoverColor = {}

const textColors  = {}

const textSize = {}

const Menu = forwardRef((
  {
    children,
    color,
    textSize,
    href,
    next,
    ...props
  }, ref
) => {
  if (next === true) {
    return (
      <li
        className="font-medium text-lg list-none px-3 py-3 hover:bg-blue-200"
        ><Link href={href}>{children}</Link></li>
    )
  } else {
    return (
      <li
        className="font-medium text-lg list-none hover:bg-blue-200 px-3 py-3"><a href={href}>{children}</a></li>
    )
  }
})

Menu.defaultProps = {
  href: '#',
  next: false
}

Menu.propTypes = {
  href: PropTypes.string.isRequired,
  next: PropTypes.bool
}

export default Menu;