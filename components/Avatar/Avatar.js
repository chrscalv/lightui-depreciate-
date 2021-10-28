import {forwardRef} from 'react';
import classNames from 'classnames';

const Avatar = forwardRef((
    {
        children,
        src,
        alt,
        width,
        height,
        minWidth,
        minHeight,
        maxWidth,
        size,
        className,
        rounded = false
    },ref
) => (
    <img 
    src={src} alt={alt} 
    className={classNames(`
        ${classes.size}
    `)}
    />
))