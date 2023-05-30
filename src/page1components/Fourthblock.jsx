import styled from "styled-components"
import { useEffect } from "react"
import ScrollReveal from "scrollreveal"

export default function Fourthblock() {
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
            <Post className="reveal">
                <img src="https://blog.emania.com.br/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2016/02/direitos-autorais-e-de-imagem-1024x683.jpg.webp" alt="" />
                <h1>O por do Sol</h1>
            </Post>
            <Post className="reveal">
                <img src="https://blog.emania.com.br/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2016/02/direitos-autorais-e-de-imagem-1024x683.jpg.webp" alt="" />
                <h1>O por do Sol</h1>
            </Post>
            <Post className="reveal">
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
`
const Post = styled.div`
    display:flex;
    flex-direction:column;
    align-items: center;
    img{
        width:400px;
        height:400px;
        border-radius: 10px;
        filter: drop-shadow(3px 3px 5px rgba(0,0,0,0.25));
        border: 1px solid black;
    }
    h1{
     
    font-family: 'Playfair', serif;
        color:white;
        font-size: 30px;
    }
`