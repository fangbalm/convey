import styled, { keyframes, createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
*{
    box-sizing:border-box
}
body{
    background: #e6e7ee;
    color: #fff;
    font-family: 'Montserrat', sans-serif;
    min-height: 100vh;
    margin: 0;
}
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 90vh;
  @media screen and (max-width: 800px) {
    padding: 0 0 15% 0;
    height: 100vh;
  }
  @media screen and (max-width: 320px) {
    padding-bottom: 8%;
  }
`;

export const H1 = styled.h1`
  text-align: center;
  margin-bottom: 0;
  font-size: 2.5rem;
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
  text-shadow: 0px 0px 3px #ffc400, 0px 0px 1px #616161;
  color: #e6e7ee;
  @media screen and (max-width: 800px) {
    font-size: 2.5rem;
    margin-top: 0;
  }
  @media screen and (max-width: 320px) {
    font-size: 1.6rem;
  }
`;

const rotate = keyframes`
   from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const grow = keyframes`
    from {
    transform: scale(1);
  }
  to {
    transform: scale(1.2);
  }
`;

const shrink = keyframes`
   from {
    transform: scale(1.2);
  }
  to {
    transform: scale(1);
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  height: 300px;
  width: 300px;
  position: relative;
  transform: scale(1);
  &.grow {
    animation: ${grow} 3s linear forwards;
  }
  &.shrink {
    animation: ${shrink} 3s linear forwards;
  }
  @media screen and (min-width: 1200px) and (max-width: 1500px) {
    height: 260px;
    width: 260px;
    position: relative;
    top: -10px;
  }
  @media screen and (max-width: 600px) {
    height: 200px;
    width: 200px;
  }
  @media screen and (max-width: 320px) {
    height: 160px;
    width: 160px;
    margin-top: 22%;
  }
`;

export const Circle = styled.div`
  background-color: #bdbdbd;
  height: 100%;
  width: 100%;
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  & + p {
    color: #010f1c;
    font-weight: 700;
    @media screen and (min-width: 1200px) {
      font-size: 1.2rem;
    }
  }
`;

export const GradientCircle = styled.div`
  background: conic-gradient(
    #ff9100 0%,
    #ffd180 40%,
    #ff1744 40%,
    #ff5252 60%,
    #336d64 60%,
    #64dd17 100%
  );
  height: 320px;
  width: 320px;
  z-index: -2;
  border-radius: 50%;
  position: absolute;
  top: -10px;
  left: -10px;
  box-shadow: 3px 3px 6px #b8b9be, -3px -3px 6px #fff;
  @media screen and (min-width: 1200px) and (max-width: 1500px) {
    height: 280px;
    width: 280px;
  }
  @media screen and (max-width: 600px) {
    height: 220px;
    width: 220px;
  }
  @media screen and (max-width: 320px) {
    height: 180px;
    width: 180px;
  }
`;

export const PointerContainer = styled.div`
  position: absolute;
  top: -40px;
  left: 140px;
  width: 20px;
  height: 190px;
  transform-origin: bottom center;
  &.start {
    animation: ${rotate} 7.5s linear forwards infinite;
  }
  @media screen and (min-width: 1200px) and (max-width: 1500px) {
    position: absolute;
    top: -44px;
    left: 120px;
    width: 20px;
    height: 173px;
    transform-origin: bottom center;
  }
  @media screen and (max-width: 600px) {
    position: absolute;
    top: -44px;
    left: 90px;
    width: 20px;
    height: 145px;
    transform-origin: bottom center;
  }
  @media screen and (max-width: 320px) {
    position: absolute;
    top: -40px;
    left: 70px;
    width: 20px;
    height: 120px;
    transform-origin: bottom center;
  }
`;

export const Pointer = styled.span`
  background-color: #757575;
  border-radius: 50%;
  height: 20px;
  width: 20px;
  display: block;
`;

export const Buttons = styled.button`
  position: relative;
  transition: all 0.2s ease;
  letter-spacing: 0.025em;
  font-size: 1rem;
  border-color: #d1d9e6 !important;
  box-shadow: 3px 3px 6px #b8b9be, -3px -3px 6px #fff;
  background-color: #e6e7ee;
  padding: 0.8rem 0.7rem;
  line-height: 1.5;
  border-radius: 0.55rem;
  display: inline-block;
  font-weight: 700;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  border: 0.0625rem solid transparent;
  font-family: 'Montserrat', sans-serif;
  width: 9rem;
  bottom: 50px; 
  text-transform: uppercase;
  cursor: pointer;
  &.btn_reset {
    color: #d9282f;
  }
  &.btn_start {
    color: #679436;
  }
  &:focus {
    outline: none;
  }
  @media screen and (max-width: 320px) {
    display: block;
    margin: 22% auto 0;
  }
`;

export const LogoDiv = styled.div`
  position: static;
  padding: 15px;
  left: 25px;
  top: 10px;
  @media screen and (min-width: 960px) {
    position: absolute;
    padding: 15px;
    left: 25px;
    top: 10px;
  }
  @media screen and (max-width: 600px) {
    position: static;
    text-align: center;
    padding: 15px 15px 10px;
  }
  @media screen and (max-width: 320px) {
    position: static;
    text-align: center;
    padding: 15px 15px 10px;
    img {
      width: 65%;
    }
  }
`;
