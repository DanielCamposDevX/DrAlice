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
                <p>Meu nome é Maria Alice Ribeiro Bastos. Sou formada pela Faculdade Metodista Granbery desde 2022. Estou iniciando minha pós graduação em Terapia Cognitiva comportamental para aprimorar meus conhecimentos e dar o meu melhor para quem me procura e confia no meu trabalho para buscar o autoconhecimento, o equilíbrio emocional, cura psicológica e desenvolvimento pessoal. Ser psicóloga foi uma das escolhas mais assertivas que fiz em toda minha vida e ver o brilho no olhar voltando e a vontade de continuar de cada paciente é o que me move dentro da profissão.</p>
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
    background-color: #7bcab8;
    height: 700px;
    display:flex;
    justify-content: space-around;
    align-items: center;
`

const Left = styled.div`
    display:flex;
    flex-direction:column;

    width:25%;
    img{
        width:150%;
        border-radius:8px;
        filter: drop-shadow(3px 3px 5px rgba(0,0,0,0.25));
    }
    `

const Right = styled.div`
    width: 20%;
    position: relative;
    
    h1{
        font-family: 'Playfair', serif;
        font-size:275%;
        color:#ecf7f6;
        filter: drop-shadow(3px 3px 5px rgba(0,0,0,0.10));

      
    }
    p{
        font-family: 'Playfair', serif;
        margin-top: 40px;
        font-size:125%;
        color:#ecf7f6;
        text-align:justify;
        filter: drop-shadow(3px 3px 5px rgba(0,0,0,0.10));

    }
    img{
        width:70px;
        }
`