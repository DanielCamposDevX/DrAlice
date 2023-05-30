import React, { useEffect } from 'react';
import styled from 'styled-components';
import ScrollReveal from 'scrollreveal';
import whats from "../assets/whatsapp-logo-variant.svg"
import Perfil from '../assets/Perfil.jpg';
import flowers from '../assets/5046614.jpg'

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
      </Left>
      <Whats className="reveal"><img src={whats} /></Whats>
      <img src={Perfil} alt="Foto perfil" className="reveal" />
    </Box>
  );
};

const Box = styled.div` 
  position:relative;
  background: #fff url(${flowers}) center bottom/cover no-repeat local;
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
    color: #3e4948;
    font-family: 'Playfair', serif;
    filter: drop-shadow(3px 3px 5px rgba(0, 0, 0, 0.1));
  }
`
const Whats = styled.button`
  img{
    width:50px;
    color:white;
    };
  width:50px;
  height:50px;
  display:none;
  justify-content:center;
  align-items:center;
  position:absolute;
  top:40px;
  right:100px;
  background-color:transparent;
  border: none;
  cursor: pointer;
`