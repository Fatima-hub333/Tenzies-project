/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';

const Die = (props) => (
  <div className="die-face">
    <h2 className="die-num">{props.value}</h2>
  </div>
);

Die.propTypes = {};

export default Die;
