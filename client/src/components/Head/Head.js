import React from 'react';
import PropTypes from 'prop-types';
import './Head.scss';

const Head = ({ text }) => {
  return (
    <div className="head">
      <span>{text}</span>
    </div>
  );
};

Head.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Head;
