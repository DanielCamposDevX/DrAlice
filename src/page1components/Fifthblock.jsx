import styled from "styled-components"

export default function Fifthblock() {
    return (
        <Box>
           <button>Whatsapp</button>
           <button>Ou preencha sua ficha:</button>
           <button>Instagram</button>
           <button>Telefone</button>
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
    justify-content: space-around;
    align-items: center;
    img{
        height: 500px;
    }
`
