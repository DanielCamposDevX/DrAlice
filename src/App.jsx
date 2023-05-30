import { useState, useEffect, useRef } from 'react';
import Firstblock from './page1components/Firstblock';
import Secondblock from './page1components/Secondblock';
import Thirdblock from './page1components/Thirdblock';
import Fourthblock from './page1components/Fourthblock';
import Fifthblock from './page1components/Fifthblock';
import styled from 'styled-components';
import { createGlobalStyle, keyframes } from 'styled-components';
import whats from "./assets/whatsapp-logo-variant.svg"
import instagram from "./assets/logo-instagram.svg"
import reset from './Reset';

export default function App() {

  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      setShowHeader(currentScrollPos > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);





  return (

    <>
      <GlobalStyle />
      {showHeader && <Header />}
      {showHeader && <HeaderContainer>
        <Container>
        <h1>Alice Bastos</h1>
        <Choice>Sobre</Choice>
        <Choice>Skills</Choice>
        <Choice>Posts</Choice>
        <Choice>Agendar</Choice>
        </Container>
        <Container>
          <Whats><img src={whats} alt="wpp" /></Whats>
          <Whats><img src={instagram} alt="insta" /></Whats>
        </Container>
      </HeaderContainer>}
      <Firstblock />
      <Secondblock />
      <Thirdblock />
      <Fourthblock />
      <Fifthblock />
    </>
  )
}



const GlobalStyle = createGlobalStyle`
 ${reset}
`
const Whats = styled.button`
width:40px;
height:40px;

display:flex;
justify-content:center;
align-items:center;

background-color:transparent;
border: none;
margin-right: 30px;

img{
  width:30px;
  height:30px;
}
cursor: pointer;
`


const Header = styled.div`
  filter: drop-shadow(3px 3px 5px rgba(0, 0, 0, 0.25));
  background: rgb(255, 239, 200);
  background: radial-gradient(
    circle,
    rgba(255, 239, 200, 1) 3%,
    rgba(239, 220, 172, 1) 100%
  );
  backdrop-filter: blur(10px);
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)";
  filter: alpha(opacity=90);
  -moz-opacity: 0.90;
  -khtml-opacity: 0.9;
  opacity: 0.8;
  position:fixed;
  top:0px;
  left:0px;
  width:100%;
  height: 70px;
  z-index: 3;
  animation: ${({ showHeader }) => (showHeader ? fadeOut : fadeIn)} 0.4s ease;
  animation-fill-mode: both;

`
const HeaderContainer = styled.div`
  position:fixed;
  top:0px;
  left:0px;
  width:100%;
  height: 70px;
  z-index: 1000;
  display:flex;
  align-items:center;
  justify-content:space-between;
  border-bottom: 1px solid black;
  h1{
    font-style: italic;
    font-family: 'Playfair', serif;
    color: white;
    font-size: 40px;
    margin-left: 50px;
    margin-right:30px;
    filter: drop-shadow(3px 3px 5px rgba(0, 0, 0, 0.25));
  }
`
const fadeIn = keyframes`
  from {
    filter: blur(20px);
    opacity: 0;
  }
  to {
    filter: blur(3px);
    opacity: 0.8;
  }
`;

const fadeOut = keyframes`
  from {
    filter: blur(3px);
    opacity: 0.8;
  }
  to {
    filter: blur(20px);
    opacity: 0;
  }
`;

const Container = styled.div`
  display:flex;
  margin-right:20px;
  height:100%;
  display:flex;
  align-items:center;
`

const Choice = styled.button`
  font-style: italic;
    font-family: 'Playfair', serif;
    color:white;
    filter: drop-shadow(3px 3px 5px rgba(0, 0, 0, 0.25));
  cursor: pointer;
  font-size: 18px;
  display:flex;
  align-items:center;
  justify-content:center;
  border:none;
  width:150px;
  height: 100%;
  background-color: rgba(255, 0, 0, 0);
  transition: background-color 1s ease 0s;
  :hover{
    background-color:  rgba(255, 255, 255, 0.9);
  }
  img{
    width: 30px;
  }
`