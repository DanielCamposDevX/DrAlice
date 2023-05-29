import styled from "styled-components"

export default function Thirdblock() {
    return (
        <Box>
            <Left>
                <h1>AliceBastos</h1>
                <h2>Psicologa CRP04/70666</h2>
            </Left>
            <Right>
             <h1>Teste</h1>
             <p>Dsadasdasdasdasdasdasdas</p>
             <h1>Teste2</h1>
             <p>sadasdasdasdasda</p>
            </Right>
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
    justify-content: space-between;
    align-items: center;
    img{
        height: 500px;
    }
`
const Right = styled.div`
    width: 50%;
    height: 100%;
    background-color: rgb(216, 198, 153);
    
    h1{
        font-family: 'Playfair', serif;
        font-size:45px;
        color:white;
        filter: drop-shadow(3px 3px 5px rgba(0,0,0,0.10));

      
    }
    p{
        font-family: 'Playfair', serif;
        margin-top: 40px;
        font-size:18px;
        color:white;
        text-align:justify;
        filter: drop-shadow(3px 3px 5px rgba(0,0,0,0.10));

    }
`

const Left = styled.div`
    display:flex;
    flex-direction:column;

    width:310px;
    overflow-wrap:break-word;
    
    
    h1{
      font-size:110px;
      color:white;
    }
    h2{
     font-size: 24px;
     color: white;
    }
`