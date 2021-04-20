import React, { useState } from 'react';

// import Logo from './logo.png';
import Header from './BreatheHeader';
import Button from './BreatheButton';

import {
  Main,
  Container,
  Circle,
  GradientCircle,
  PointerContainer,
  Pointer,
  GlobalStyles,
} from './BreatheStyles';

const BreatheContainer = () => {
  const [direction, setDirection] = useState('');
  const [text, setText] = useState('');
  const [pointer, setPointer] = useState('');
  const [intervalId, setIntervalId] = useState('');
  const [toggle, setToggle] = useState(false);
  const [clearBH, setClearBH] = useState('');
  const [clearBO, setClearBO] = useState('');

  const breatheIn = () => {
    setDirection('grow');
    setText('Breath In');
  };

  const breatheHold = () => {
    setDirection('grow');
    setText('hold');
  };

  const breatheOut = () => {
    setDirection('shrink');
    setText('Breathe Out');
  };

  const breathAnimation = () => {
    const totalTime = 7500;
    const breatheTime = (totalTime / 5) * 2;
    const holdTime = totalTime / 5;
    setPointer('start');
    breatheIn();

    const bh = setTimeout(() => {
      breatheHold();

      const bo = setTimeout(() => {
        breatheOut();
      }, holdTime);
      setClearBO(bo);
    }, breatheTime);
    setClearBH(bh);
  };

  const startNow = () => {
    setToggle(true);
    breathAnimation();
    const myInterval = setInterval(() => {
      breathAnimation();
    }, 7500);
    setIntervalId(myInterval);
  };

  const stopFunction = () => {
    clearTimeout(clearBH);
    clearTimeout(clearBO);
    clearInterval(intervalId);
    setDirection('');
    setText('');
    setToggle(false);
    setPointer('');
  };

  return (
    <React.Fragment>
      <Main>
        {/* <Header Logo={Logo} /> */}
        <Container className={direction}>
          <Circle />
          <p>{text.toUpperCase()}</p>
          <PointerContainer className={pointer}>
            <Pointer />
          </PointerContainer>

          <GradientCircle />
        </Container>
        <Button
          toggle={toggle}
          startNow={startNow}
          stopFunction={stopFunction}
        />
      </Main>
      <GlobalStyles />
    </React.Fragment>
  );
};

export default BreatheContainer;

// <div className="breathe-body">
//            <div className="breathe-container">
//                <div className="circle">

//                </div>
//            </div>
//     </div>
