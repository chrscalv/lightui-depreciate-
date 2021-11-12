import { forwardRef } from "react";
import classNames from "classnames";
import PropTypes from 'prop-types'

const textColor = {}
const fontSize = {}

const CardTitle = forwardRef((
  {
    children,
    txtColor,
    ...props
  }, ref
) => {
  let classes = [];
  const generalClass = [
    'uppercase',
    'tracking-wide'
  ]
  return (
    <div
      className="uppercase tracking-wide text-sm text-indigo-500 font-semibold"
      {...props}
    >
      { children }
    </div>
  )
})

export default CardTitle;