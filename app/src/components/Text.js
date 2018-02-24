import React from 'react';
import PropTypes from 'prop-types';

const Text = ({ text, textIsVisible }) => (
    <h2>{ textIsVisible ? text : '' }</h2>
);

Text.propTypes = {
    text: PropTypes.string.isRequired,
    textIsVisible: PropTypes.bool.isRequired
}

export default Text;