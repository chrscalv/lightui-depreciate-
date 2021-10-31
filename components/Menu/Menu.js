import { forwardRef } from 'react';
import PropTypes from 'prop-types'
import Link from 'next/link';

const bgActiveColor = {}

const bgHoverColor = {}

const textColors  = {}

const textSize = {}

const Menu = forwardRef((
  {
    children,
    color,
    textSize,
    href,
    next
  }, ref
) => {
  if (next === true) {
    return (
      <li
        className="font-medium text-lg"><Link href={href}>{children}</Link></li>
    )
  } else {
    return (
      <li
        className="font-medium text-lg"><a href={href}>{children}</a></li>
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