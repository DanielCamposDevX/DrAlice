import styled from "styled-components"
import ScrollReveal from "scrollreveal";
import { useEffect } from "react";
import { SiMinds } from 'react-icons/si'
import sobre from '../assets/Sobre.jpg'


export default function Secondblock() {

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
                <img src={sobre} alt="Foto perfil" />
            </Left>
            <Right className="reveal">
                <h1>Sobre</h1>
                <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <Place><SiMinds /></Place>
            </Right>
        </Box>
    )
}

const Place = styled.div`
  position:absolute;
  right:30px;
  top: 0;
  font-size:50px;
  color:#ecf7f6;
`

const Box = styled.div`
    background-color: #374c47;
    height: 700px;
    display:flex;
    justify-content: space-around;
    align-items: center;
`

const Left = styled.div`
    display:flex;
    flex-direction:column;

    width:310px;
    overflow-wrap:break-word;
    img{
        width:465px;
        height: 581.25px;
        border-radius:8px;
        filter: drop-shadow(3px 3px 5px rgba(0,0,0,0.25));
    }
    `

const Right = styled.div`
    width: 250px;
    position: relative;
    
    h1{
        font-family: 'Playfair', serif;
        font-size:45px;
        color:#ecf7f6;
        filter: drop-shadow(3px 3px 5px rgba(0,0,0,0.10));

      
    }
    p{
        font-family: 'Playfair', serif;
        margin-top: 40px;
        font-size:18px;
        color:#ecf7f6;
        text-align:justify;
        filter: drop-shadow(3px 3px 5px rgba(0,0,0,0.10));

    }
    img{
        width:70px;
        }
`