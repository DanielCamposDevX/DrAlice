import styled from "styled-components"

export default function Fourthblock() {
    return (
        <Box>
            <Post>
                <img src="https://blog.emania.com.br/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2016/02/direitos-autorais-e-de-imagem-1024x683.jpg.webp" alt="" />
                <h1>O por do Sol</h1>
            </Post>
            <Post>
                <img src="https://blog.emania.com.br/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2016/02/direitos-autorais-e-de-imagem-1024x683.jpg.webp" alt="" />
                <h1>O por do Sol</h1>
            </Post>
            <Post>
                <img src="https://blog.emania.com.br/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2016/02/direitos-autorais-e-de-imagem-1024x683.jpg.webp" alt="" />
                <h1>O por do Sol</h1>
            </Post>
        </Box>
    )
}

const Box = styled.div`
    background-color: #BC6C25;;
    height: 700px;
    display:flex;
    justify-content: space-around;
    align-items: center;
    img{
        height: 500px;
    }
`
const Post = styled.div`
    display:flex;
    flex-direction:column;
    align-items: center;
    img{
        width:300px;
        border-radius: 10px;
        filter: drop-shadow(3px 3px 5px rgba(0,0,0,0.25));
        border: 1px solid black;
    }
    h1{
        color:white;
        font-size: 30px;
    }
`