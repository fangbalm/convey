import React from 'react';

import { H1, LogoDiv } from './BreatheStyles';

const BreatheHeader = ({ Logo }) => {
  return (
    <header>
      <LogoDiv>
        {/* <img src={Logo} alt="Azeem Ansari" /> */}
      </LogoDiv>
      <H1>Relaxer</H1>
    </header>
  );
};

export default BreatheHeader;
