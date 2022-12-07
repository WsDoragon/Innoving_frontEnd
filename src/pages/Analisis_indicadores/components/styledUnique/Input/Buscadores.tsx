import styled from "styled-components";

export const ContenedorBuscador = styled.div<{marginLeft?: string }>`
    position: relative;
    min-height: 40px;
    margin-bottom: 10px;
    width: 100%;
    margin-top: 10px;
    margin-left: ${props => props.marginLeft? props.marginLeft: "0px"};
`


export const Buscador = styled.input`

    position: absolute;
    top: 0;
    bottom: 0;
    width: ${props => props.width? props.width : "100%"};
    max-width: 750px;
    padding: 5px 8px 5px 30px;
    border-radius: 10px;
    outline: none;
    border: 1px solid black;
    font-size: 16px;
    @media (max-width: 750px){
        width: 100%;
    }
`

export const ContenedorIconBuscador = styled.span`
    position: absolute;
    top: 10px;
    left: 6px;
    z-index: 99;
    font-size: 22px;
    color: black;
`
