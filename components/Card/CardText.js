import { forwardRef } from "react";
import classNames from "classnames";

const CardText = forwardRef((
    {
        children
    },ref
) => {
    return(
        <div className="mt-2 text-gray-500">
            {children}
        </div>
    )
})

export default CardText;