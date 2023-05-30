import styled from "styled-components"
import { useEffect } from "react"
import ScrollReveal from "scrollreveal"
import whats from "../assets/whatsapp-logo-variant.svg"
import arrow from "../assets/caret-down-outline.svg"
import instagram from "../assets/logo-instagram.svg"
import phone from "../assets/call-outline.svg"


export default function Fifthblock() {

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
            <Container className="reveal">
                <h1>Entre em contato pelo whatsapp, ou preencha sua ficha e entraremos em contato</h1>
                <Bar><h1>Preencha sua ficha </h1><Whats><img src={arrow} /></Whats></Bar>
            </Container>
            <Bar className="reveal">
                <Whats><img src={whats} /></Whats>
                <Whats><img src={instagram} /></Whats>
                <Whats><img src={phone} /></Whats>
            </Bar>
        </Box>
    )
}

const Box = styled.div`
      background: rgb(255, 239, 200);
  background: radial-gradient(
    circle,
    rgba(255, 239, 200, 1) 3%,
    rgba(239, 220, 172, 1) 100%
  );
    height: 700px;
    display:flex;
    flex-direction:column;
    justify-content: space-around;
    align-items: center;
   
`
const Whats = styled.button`
    background-color:transparent;
    border: none;
    width:40px;
    height:40px;
    display:flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 20px;
    margin-left:20px;
    img{
        width:40px;
        height:40px;
        }
    cursor: pointer;
`
const Bar = styled.div`
    margin-top:30px;
    background-color:transparent;
    width: 50%;
    border-radius:5px;
    border: 1px solid gray;
    display:flex;
    justify-content: space-between;
    align-items:center;
    h1{
    font-family: 'Playfair', serif;
        margin-left:20px;
    }
`
const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    
    `