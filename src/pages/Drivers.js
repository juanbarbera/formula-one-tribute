import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const Background = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: #fffff9;
`;

const ayrtonAnimation = keyframes`
  0% {transform: rotate(0deg) translate(40vh) rotate(0deg)}
  100% {transform: rotate(360deg) translate(40vh) rotate(-360deg)}
`;

const Ayrton = styled.div`
    position: absolute;
    text-align: center;
    left: 65%;
    top: 50%;
    transform: translate3d(-50%, -50%, 0);
    font-size: 1.38rem;
    transition: font-size .3s;
    animation: ${ayrtonAnimation};
    animation-duration: 35s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-play-state: ${props => props.isHovering ? 'paused' : ''};
    cursor: pointer;
    margin-left: -75px;
    :hover {
      font-size: 2rem;
    }
`;

const jimAnimation = keyframes`
  0% {transform: rotate(60deg) translate(40vh) rotate(-60deg)}
  100% {transform: rotate(420deg) translate(40vh) rotate(-420deg)}
`;

const Jim = styled.div`
    position: absolute;
    text-align: center;
    left: 65%;
    top: 50%;
    transform: translate3d(-50%, -50%, 0);
    font-size: 1.38rem;
    transition: font-size .3s;
    animation: ${jimAnimation};
    animation-duration: 35s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-play-state: ${props => props.isHovering ? 'paused' : ''};
    cursor: pointer;
    margin-left: -35px;
    :hover {
      font-size: 2rem;
    }
`;

const michaelAnimation = keyframes`
  0% {transform: rotate(120deg) translate(40vh) rotate(-120deg)}
  100% {transform: rotate(480deg) translate(40vh) rotate(-480deg)}
`;

const Michael = styled.div`
    position: absolute;
    text-align: center;
    left: 65%;
    top: 50%;
    transform: translate3d(-50%, -50%, 0);
    font-size: 1.38rem;
    transition: font-size .3s;
    animation: ${michaelAnimation};
    animation-duration: 35s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-play-state: ${props => props.isHovering ? 'paused' : ''};
    cursor: pointer;
    margin-left: -85px;
    :hover {
      font-size: 2rem;
    }
`;

const nikiAnimation = keyframes`
  0% {transform: rotate(180deg) translate(40vh) rotate(-180deg)}
  100% {transform: rotate(540deg) translate(40vh) rotate(-540deg)}
`;

const Niki = styled.div`
    position: absolute;
    text-align: center;
    left: 65%;
    top: 50%;
    transform: translate3d(-50%, -50%, 0);
    font-size: 1.38rem;
    transition: font-size .3s;
    animation: ${nikiAnimation};
    animation-duration: 35s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-play-state: ${props => props.isHovering ? 'paused' : ''};
    cursor: pointer;
    margin-left: -55px;
    :hover {
      font-size: 2rem;
    }
`;

const juanAnimation = keyframes`
  0% {transform: rotate(240deg) translate(40vh) rotate(-240deg)}
  100% {transform: rotate(600deg) translate(40vh) rotate(-600deg)}
`;

const Juan = styled.div`
    position: absolute;
    text-align: center;
    left: 65%;
    top: 50%;
    transform: translate3d(-50%, -50%, 0);
    font-size: 1.38rem;
    transition: font-size .3s;
    animation: ${juanAnimation};
    animation-duration: 35s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-play-state: ${props => props.isHovering ? 'paused' : ''};
    cursor: pointer;
    margin-left: -105px;
    :hover {
      font-size: 2rem;
    }
`;

const lewisAnimation = keyframes`
  0% {transform: rotate(300deg) translate(40vh) rotate(-300deg)}
  100% {transform: rotate(660deg) translate(40vh) rotate(-660deg)}
`;

const Lewis = styled.div`
    position: absolute;
    text-align: center;
    left: 65%;
    top: 50%;
    transform: translate3d(-50%, -50%, 0);
    font-size: 1.38rem;
    transition: font-size .3s;
    animation: ${lewisAnimation};
    animation-duration: 35s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-play-state: ${props => props.isHovering ? 'paused' : ''};
    cursor: pointer;
    margin-left: -65px;
    :hover {
      font-size: 2rem;
    }
`;

const Circle = styled.div`
  height: 80vh;
  width: 80vh;
  border: 1px solid black;
  border-radius: 50%;
  position: absolute;
  left: 65%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
`;

export const Drivers = () => {
  const [isHovering, setIsHovering] = useState(false); 
  const [driver, setDriver] = useState('');

  // finish all drivers, than add picture

  return (
    <Background>
    <Ayrton onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)} isHovering={isHovering}>Ayrton Senna</Ayrton>
    <Jim onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)} isHovering={isHovering}>Jim Clark</Jim>
    <Michael onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)} isHovering={isHovering}>Michael Schumacher</Michael>
    <Niki onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)} isHovering={isHovering}>Niki Lauda</Niki>
    <Juan onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)} isHovering={isHovering}>Juan Manuel Fangio</Juan>
    <Lewis onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)} isHovering={isHovering}>Lewis Hamilton</Lewis>
    {/* <Circle></Circle> */}
    </Background>
  )
}

