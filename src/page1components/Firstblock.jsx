import React, { useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import ScrollReveal from 'scrollreveal';
import animations from './Animations';
import Perfil from '../assets/Perfil.jpg';

export default function Firstblock(){
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
      </Left>
      <img src={Perfil} alt="Foto perfil" className="reveal" />
    </Box>
  );
};

const Box = styled.div`
  margin-top: 70px;
  background: rgb(255, 239, 200);
  background: radial-gradient(
    circle,
    rgba(255, 239, 200, 1) 3%,
    rgba(239, 220, 172, 1) 100%
  );
  height: 700px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  img {
    height: 500px;
    width: 400px;
    border-radius: 8px;
    filter: drop-shadow(3px 3px 5px rgba(0, 0, 0, 0.25));
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 110px;
    font-weight: 800;
    font-style: italic;
    font-family: 'Playfair', serif;
    color: white;
    line-height: 90px;
    filter: drop-shadow(3px 3px 5px rgba(0, 0, 0, 0.1));
    
  }

  h2 {
    margin-top: 70px;
    font-size: 24px;
    font-weight: 700;
    color: white;
    font-family: 'Playfair', serif;
    filter: drop-shadow(3px 3px 5px rgba(0, 0, 0, 0.1));
  }
`;


