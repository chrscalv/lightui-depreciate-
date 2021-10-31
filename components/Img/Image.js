import {forwardRef} from 'react';
import Proptypes from 'prop-types';

const Image = forwardRef((
    {
        src,
        alt,
        width,
        height,
        size,
        responsive,
    }
))

Image.defaultProps = {}

Image.propTypes = {}