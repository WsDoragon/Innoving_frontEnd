import styled from "styled-components";


export const Box = styled.div`
    background-color: #f1f1f1;
    color:black;
    height: auto;
    margin-top: 10px;
    margin-left: 15px;
    margin-right: 10px;
    border: 2px solid black;
    border-radius: 12px;
    padding: 5px;
`

export const BoxEvidencias = styled(Box)<{type: string}>`
    background-color: ${props =>{
        switch(props.type){
            case 'bien':
                return props.theme.coloresAlerta.bien;
            case 'atento':
                return props.theme.coloresAlerta.atento;
            case 'error':
                return props.theme.coloresAlerta.error;
            case 'advertencia':
                return props.theme.coloresAlerta.advertencia
        }
    }};
    color: ${props => props.type === 'advertencia'? 'black': props.theme.colorInnoving.blanco};
`

export const Stack = styled.div`
    display: inline;
`

export const Topbar = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: ${props => props.theme.colorInnoving.white};
    padding: 10px;
    margin-bottom: 10px;
    @media (max-width: 750px) {
        flex-direction: column;
        padding-right: 20px;
    }
`

export const ContenedorIndicador = styled.div`
    background-color: ${props => props.theme.colorInnoving.blanco};
    padding: 10px;
`

export const ContenedorGrid = styled.div`
    display: grid;
    grid-template-columns: 300px calc(100% - 300px) ;
    grid-template-areas: "navbar contenido";
    grid-template-rows: auto;
    @media screen and (max-width: 768px){
        grid-template-columns: 100%;
        height: auto;
		grid-template-areas: "navbar"
                             "contenido";
    }
`

export const ContenedorBody = styled.div`
    margin: 10px;
    
`


export const ContenedorNavbar = styled.nav`
    //background-color: ${props => props.theme.colorInnoving.moradoClaro};
    grid-area: "navbar";
    min-height: 100%;
    display: flex;
    flex-direction: column;
    padding: 20px;
    height: 100vh;
    overflow-y: scroll;
    @media screen and (max-width: 768px){
        height: auto;
    }
`

export const ContenedorMiniItems = styled.div`
    display: flex;
    flex-direction: column;
    margin: 5px 0px 0px 10px;
    padding-left: 5px;
`

export const ContenedorItemsAcordeon = styled.div<{margin?: string}>`
    color: ${props => props.theme.colorInnoving.moradoClaro};
    background-color: ${props => props.color?  props.color: "none"};
    cursor: pointer;
    padding: 10px;
    margin: ${props => props.margin? props.margin: "0px"};
`