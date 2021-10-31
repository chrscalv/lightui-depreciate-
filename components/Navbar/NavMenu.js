import {forwardRef} from 'react';
import Proptypes from 'prop-types'

export default function NavMenu({children}) {
    return (
        <div className="w-11/12">
            <ul className="flex py-5 items-center justify-end space-x-7">
                {children}
            </ul>
        </div>
    )
}