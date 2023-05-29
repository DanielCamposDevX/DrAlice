import styled from "styled-components"

export default function Firstblock() {
    return (
        <Box>
            <Left>
                <h1>AliceBastos</h1>
                <h2>Psicologa CRP04/70666</h2>
            </Left>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIO8Bt_W5GbADFqBfJwpvMHy1e5bKyzq8yKx3aRA5l&s" alt="Foto perfil" />
        </Box>
    )
}

const Box = styled.div`
    margin-top:70px;
    background-color: #FDCCCC;
    height: 700px;
    display:flex;
    justify-content: space-around;
    align-items: center;
    img{
        height: 500px;
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