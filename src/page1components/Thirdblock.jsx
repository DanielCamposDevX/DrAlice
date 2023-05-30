import styled from "styled-components"
import ScrollReveal from "scrollreveal";
import { useEffect } from "react";
import { BsBook, BsDot } from 'react-icons/bs'

export default function Thirdblock() {

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
            <Left >
                <Bloco className="reveal">
                    <Place><BsBook /><BsDot /><BsDot /><BsDot /></Place>
                    <h1>Teste</h1>
                    <p>Dsadasdasdasdasdasdasdas</p>
                    <p>Dsadasdasdasdasdasdasdas</p>
                    <p>Dsadasdasdasdasdasdasdas</p>
                </Bloco>
                <Bloco className="reveal">
                    <Place><BsBook /><BsDot /><BsDot /><BsDot /></Place>
                    <h1>Teste2</h1>
                    <p>sadasdasdasdasda</p>
                    <p>Dsadasdasdasdasdasdasdas</p>
                    <p>Dsadasdasdasdasdasdasdas</p>

                </Bloco>
            </Left>
            <Right >
                <Bloco className="reveal">
                    <Place><BsBook /><BsDot /><BsDot /><BsDot /></Place>
                    <h1>Teste</h1>
                    <p>Dsadasdasdasdasdasdasdas</p>
                    <p>Dsadasdasdasdasdasdasdas</p>
                    <p>Dsadasdasdasdasdasdasdas</p>
                </Bloco>
                <Bloco className="reveal">
                    <Place><BsBook /><BsDot /><BsDot /><BsDot /></Place>
                    <h1>Teste2</h1>
                    <p>sadasdasdasdasda</p>
                    <p>Dsadasdasdasdasdasdasdas</p>
                    <p>Dsadasdasdasdasdasdasdas</p>

                </Bloco>
            </Right>
        </Box>
    )
}

const Box = styled.div`

    height: 700px;
    display:flex;
    justify-content: space-between;
    align-items: center;
    img{
        height: 500px;
    }
`
const Right = styled.div`
    width: 50%;
    height: 100%;
    background-color: #50b39a;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;    
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
`

const Left = styled.div`
  width: 50%;
  background-color: #53bead;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;    
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
`
const Bloco = styled.div`
    position:relative;
    width:300px;
`
const Place = styled.div`
  position:absolute;
  left:-40px;
  top: 10px;
  font-size:30px;
  color:#ecf7f6;
  height:222px;
  display:flex;
  flex-direction:column;
  justify-content: space-between;
`
