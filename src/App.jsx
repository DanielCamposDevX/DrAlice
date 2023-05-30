import Firstblock from './page1components/Firstblock';
import Secondblock from './page1components/Secondblock';
import Thirdblock from './page1components/Thirdblock';
import Fourthblock from './page1components/Fourthblock';
import Fifthblock from './page1components/Fifthblock';
import styled from 'styled-components';
import { createGlobalStyle, keyframes } from 'styled-components';
import reset from './Reset';
import { IoLogoWhatsapp,IoLogoInstagram } from 'react-icons/io5'
import logo from './assets/Maria_Alice.png'

export default function App() {


  return (

    <>
      <GlobalStyle />
      <Header />
      <HeaderContainer>
        <Container>
          <img src={logo} alt="logo" />
          <Choice>Sobre </Choice>
          <Choice>Skills</Choice>
          <Choice>Posts</Choice>
          <Choice>Agendar</Choice>
        </Container>
        <Container>
          <Whats><IoLogoWhatsapp /></Whats>
          <Whats><IoLogoInstagram /></Whats>
        </Container>
      </HeaderContainer>
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
cursor: pointer;
font-size: 25px;
color:white;
transition: color 0.3s ease 0s;
:hover{
    color:#3e4948;
  }
`


const Header = styled.div`
  filter: drop-shadow(3px 3px 5px rgba(0, 0, 0, 0.25));
  background-color: #7bcab8;
  backdrop-filter: blur(100px);
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
    white-space: nowrap

  }
`

const Container = styled.div`
  display:flex;
  margin-right:20px;
  height:100%;
  display:flex;
  align-items:center;
  overflow:clip;
  img{
    margin-top:20px;
    height:400%;

  }
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
  transition: background-color 0.3s ease 0s;
  :hover{
    background-color:  rgba(255, 255, 255, 0.25);
  }
  img{
    width: 30px;
  }
`