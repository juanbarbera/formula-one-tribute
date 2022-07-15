import { useEffect, useState } from 'react';
import styled, { keyframes } from "styled-components"
import { Link } from 'react-router-dom';

import { IconButton } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';

import f1Logo from '../assets/images/F1.svg.png'
import ferrariVTen from '../assets/audios/v10ferrari.mp3';

const Background = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fffff9;
`;

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Logo = styled.img`
  height: 100px;
`;

const Tribute = styled.div`
  padding-top: 1vh;
  color: black;
  text-align: center;
  font-size: 3rem;
  font-weight: 700;
`;

const Button = styled(IconButton)`
  && {
    margin-top: 2.5vh;
    color: red;
  }
`;

const CategoryWrapper = styled.div`
  width: 60vw;
  height: 10vh;
  margin-top: 5vh;
  display: flex;
  justify-content: space-evenly;
  cursor: pointer;
  font-size: 2rem;
`;

const appearsAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`; 
  

const Category = styled(Link)`
  width: 15vw;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: black;
  transition: all .3s;
  :hover {
    font-size: 2.15rem;
  }
  &:nth-child(1) {
    animation: ${appearsAnimation};
    animation-duration: 2s;
  }
  &:nth-child(2) {
    animation: ${appearsAnimation};
    animation-duration: 2.25s;
    animation-timing-function: cubic-bezier(.32,0,1,.98);
  }
  &:nth-child(3) {
    animation: ${appearsAnimation};
    animation-duration: 2.5s;
    animation-timing-function: cubic-bezier(.77,0,1,.98);
  }
`;

export const Home = () => {
  const [audio] = useState(new Audio(ferrariVTen));
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  },[playing, audio])

  return (
    <Background>
      <LogoWrapper>
        <Logo src={f1Logo} />
        <Tribute>TRIBUTE</Tribute>
      </LogoWrapper>
      <Button onClick={() => setPlaying(!playing)}>
        {playing ? <PauseCircleIcon /> : <PlayArrowIcon />}
      </Button>
      <CategoryWrapper>
        <Category to="/drivers">DRIVERS</Category>
        <Category to="/drivers">CARS</Category>
        <Category to="/drivers">CIRCUITS</Category>
      </CategoryWrapper>
    </Background>
  )
}

