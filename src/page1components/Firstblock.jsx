import React, { useEffect } from 'react';
import styled from 'styled-components';
import ScrollReveal from 'scrollreveal';
import Perfil from '../assets/Perfil.jpg';
import flowers from '../assets/5046614.jpg'
import { BsStars} from 'react-icons/bs'


export default function Firstblock() {
 
  useEffect(() => {
    ScrollReveal().reveal('.reveal', {
      duration: 1000,
      distance: '50px',
      easing: 'ease-in',
      origin: 'left',
      opacity: 0,
      reset: true,
      viewFactor: 0.2,
    });
  }, []);

  return (
    <Box>
      <Left className="reveal">
        <h1>Alice</h1>
        <h1>Bastos</h1>
        <h2>Psicologa CRP04/70666</h2>
        <Place><BsStars /></Place>
      </Left>
      <img src={Perfil} alt="Foto perfil" className="reveal" />
    </Box>
  );
};

const Place = styled.div`
  position:absolute;
  right:30px;
  bottom: 40px;
  font-size:280%;
  color: #3e4948;
`



const Box = styled.div` 
  margin-top:70px;
  position:relative;
  background: #fff url(${flowers}) center bottom/cover no-repeat local;
  height: 700px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  img {
    width: 33%;
    border-radius: 8px;
    filter: drop-shadow(3px 3px 5px rgba(0, 0, 0, 0.25));
  }
`;

const Left = styled.div`
  position:relative;
  display: flex;
  flex-direction: column;
  background-color: #a4bcb4;
  padding:3%;
  padding-top: 4%;
  padding-bottom: 4%;
  border: 1px dotted #318f87c7;
  border-radius:10px;
  filter: drop-shadow(15px 10px 3px rgba(0, 0, 0, 0.1));

  h1 {
    font-size: 625%;
    font-weight: 800;
    font-style: italic;
    font-family: 'Playfair', serif;
    color: white;
    line-height: 90px;
    filter: drop-shadow(3px 3px 5px rgba(0, 0, 0, 0.1));
    margin-left:5px;
    
  }

  h2 {
    margin-top: 70px;
    font-size: 140%;
    font-weight: 700;
    color: #3e4948;
    font-family: 'Playfair', serif;
    filter: drop-shadow(3px 3px 5px rgba(0, 0, 0, 0.1));
  }
`