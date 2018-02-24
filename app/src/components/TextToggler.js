import React from 'react';
import PropTypes from 'prop-types';

const TextToggler = ({ onClick }) => (
    <button onClick={ e => {
        e.preventDefault();
        onClick();
    } }>Toggle text</button>
);

TextToggler.propTypes = {
    onClick: PropTypes.func.isRequired
}

export default TextToggler;