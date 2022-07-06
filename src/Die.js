/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';

const Die = (props) => {
  const styles = {
    backgroundColor: props.isHeld ? '#59E391' : 'white',
  };
  return (
    <div className="die-face" style={styles}>
      <h2 className="die-num">{props.value}</h2>
    </div>
  );
};

Die.propTypes = {};

export default Die;
