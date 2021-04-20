import React from 'react';
import { Buttons } from './BreatheStyles';

const Button = ({ toggle, startNow, stopFunction }) => {
  return toggle ? (
    <Buttons className="btn_reset" onClick={stopFunction}>
      Stop
    </Buttons>
  ) : (
    <Buttons className="btn_start" onClick={startNow}>
      Start Now
    </Buttons>
  );
};

export default Button;
