import { forwardRef } from 'react';
import Proptypes from 'prop-types'

const navMenu = forwardRef((
  {
    children,
    position
  }, ref
) => (
  <>
    <div className="w-10/12 invisible lg:visible md:visible xl:visible">
      <ul className="flex py-5 items-center justify-end space-x-3 focus:bg-blue-200">
        {children}
      </ul>
    </div>
    <div className="visible md:invisible mx-3">
      mobile nav
    </div>
  </>
))

export default navMenu;