import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '../Button/Button';

const colors = {
  white: 'bg-white',
  lightGray: 'bg-gray-50',
  lightBlue: 'bg-blue-300',
  blue: 'bg-blue-400',
  darkBlue: 'bg-blue-900',
  yellow: 'bg-yellow-800',
  lime: 'bg-lime-700'
}


const Navbar = forwardRef((
  {
    children,
    title,
    color,
  }, ref
) => (
  <nav className={`${colors[color]} shadow-md h-auto`}>
    <div className="container mx-auto">
      <div className="flex justify-between items-center">
        {children}
      </div>
    </div>
  </nav>
))

Navbar.defaultProps = {
  title: 'Navbar',
  color: 'white'
}

Navbar.propTypes = {
  children: PropTypes.node.isRequired,
  title :PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
}

export default Navbar;