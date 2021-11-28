import classNames from "classnames";
import PropTypes from 'prop-types';
import { forwardRef } from "react";

const height = {
  //
}

const width = {
  //
}

const CardImage = forwardRef((
  {
    src,
    alt,
    height,
    width,
    rounded,
    className,
    ...props
  }, ref
) => {
  let classes = [];
  const generalClass = [
    'object-cover'
  ]

  return (
    <div className="md:flex-shrink-0">
      <img 
      className="h-48 w-full object-cover"
      src={src} alt={alt}
      {...props} />
    </div>
  )
})

CardImage.defaultProps = {
  src : 'https://source.unsplash.com/WLUHO9A_xik/1600x900',
  alt : 'test'
}

CardImage.propTypes = {
  src     : PropTypes.string.isRequired,
  rounded : PropTypes.bool
}

export default CardImage