import { forwardRef } from 'react';
import PropTypes from 'prop-types';

export default function NavTitle({ children }) {
  return (
    <div className="w-3/12 font-semibold tracking-wider text-md uppercase mx-3 md:mx-0 text-2xl">
    <a href="#">{children}</a>
    </div>
  )
}

NavTitle.defaultProp = {

}