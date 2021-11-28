import { forwardRef } from "react";
import PropTypes from 'prop-types';
import { CardBody } from "..";

const bgColors = {
  white: 'bg-white',
  lightBlue: 'bg-blue-300',
  blue: 'bg-blue-400',
  darkBlue: 'bg-blue-600',
  yellow: 'bg-yellow-800',
  lime: 'bg-lime-700'
}

const shadows = {
  '1'   : 'shadow-inner',
  '2'      : 'shadwow-sm',
  '3'      : 'shadow-md',
  '4'      : 'shadow-lg',
  '5'      : 'shadow-xl',
  '6'     : 'shadow-2xl',
  '7'     : 'shadow-3xl'
}

const shapped = {
  //
}

const Card = forwardRef((
  {
    children,
    color,
    shadow,
    ...props

  }, ref
) => {
  return(
    <div className={`${bgColors[color]} rounded-xl ${shadows[shadow]}  overflow-hidden relative`}>
        {children}
    </div>
  )
})

Card.defaultProps = {
  color : 'white',
  shadow : '5',
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string.isRequired,
  shadow: PropTypes.string.isRequired
}

export default Card;