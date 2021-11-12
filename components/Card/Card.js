import { forwardRef } from "react";
import PropTypes from 'prop-types';
import { Button } from "..";

const bgColor = {
  white: 'bg-white',
  lightBlue: 'bg-blue-300',
  blue: 'bg-blue-400',
  darkBlue: 'bg-blue-600',
  yellow: 'bg-yellow-800',
  lime: 'bg-lime-700'
}

const Card = forwardRef((
  {
    children,
    title,
    subtitle,
    size,
    width,
    height,
    loading

  }, ref
) => (
  <div className="bg-white rounded-xl shadow-2xl overflow-hidden relative lg:max-w-sm">
    <div className="">
      {children}
    </div>
  </div>
))

Card.defaultProps = {
  color : 'white',
  horizontal: false
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string.isRequired,
  horizontal: PropTypes.bool.isRequired
}

export default Card;