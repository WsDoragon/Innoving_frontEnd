import styled from "styled-components";

export const VentanaEmergente = styled.div<{isOpen: boolean}>`
    background-color: rgba(0, 0, 0, .85);
    display: ${props => props.isOpen? 'grid': 'none'};
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 200;
    justify-content: center;
    align-items: center;
`


export const TextoEmergente = styled.div`
    position: relative;
    background: #ddd;
    padding: 30px 10px 5px;
    width: 800px;
    height: 600px;
    display: grid;
    grid-template-areas: "publicacion texto";
    grid-template-columns: 2fr 1fr;
    @media (max-width: 1000px){
        width: 600px;
        height: 600px;
        grid-template-areas: "publicacion" "texto";
        grid-template-columns: 1fr;
        grid-template-rows: 4fr 1fr;
        overflow-y: scroll;
    }
` 

export const Publicacion = styled.div`
    grid-area: publicacion;
    width: 100%;
    height: 100%;
    @media (max-width: 1000px){
        height: 100vh;
    }
`

export const TextoPublicacion = styled.div`
    grid-area: texto;
    display: flex;
    flex-direction: column;
    margin: 5px;
`

export const InputPublicación = styled.input`
    margin: 5px;
    padding: 5px;
`