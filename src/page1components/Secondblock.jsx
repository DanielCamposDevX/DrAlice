import styled from "styled-components"

export default function Firstblock() {
    return (
        <Box>
            <Left>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIO8Bt_W5GbADFqBfJwpvMHy1e5bKyzq8yKx3aRA5l&s" alt="Foto perfil" />
            </Left>
            <Right>
                <h1>Sobre</h1>
                <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </Right>
        </Box>
    )
}

const Box = styled.div`
    background-color: #4b043b;
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
        height: 500px;
    }
    `

const Right = styled.div`
    width: 200px;
    h1{
        font-size:45px;
        color:white;
    }
    p{
        font-size:18px;
        color:white;
    }
`