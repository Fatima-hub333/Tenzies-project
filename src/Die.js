/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
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
    <div
      className="die-face"
      style={styles}
      onClick={props.holdDice}
    >
      <h2 className="die-num">{props.value}</h2>
    </div>
  );
};

Die.propTypes = {};

export default Die;
