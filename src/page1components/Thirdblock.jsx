import styled from "styled-components"
import ScrollReveal from "scrollreveal";
import { useEffect } from "react";

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
                    <h1>Teste</h1>
                    <p>Dsadasdasdasdasdasdasdas</p>
                    <p>Dsadasdasdasdasdasdasdas</p>
                    <p>Dsadasdasdasdasdasdasdas</p>
                </Bloco>
                <Bloco className="reveal">
                    <h1>Teste2</h1>
                    <p>sadasdasdasdasda</p>
                    <p>Dsadasdasdasdasdasdasdas</p>
                    <p>Dsadasdasdasdasdasdasdas</p>
                    <p>Dsadasdasdasdasdasdasdas</p>
                </Bloco>
            </Left>
            <Right >
                <Bloco className="reveal"> <h1>Teste</h1>
                    <p>Dsadasdasdasdasdasdasdas</p>
                    <p>Dsadasdasdasdasdasdasdas</p>
                    <p>Dsadasdasdasdasdasdasdas</p>
                </Bloco>
                <Bloco className="reveal">
                    <h1>Teste2</h1>
                    <p>sadasdasdasdasda</p>
                    <p>Dsadasdasdasdasdasdasdas</p>
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
    background-color: #687e79;
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
  background-color: #a4bcb4;
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

    width:300px;
`