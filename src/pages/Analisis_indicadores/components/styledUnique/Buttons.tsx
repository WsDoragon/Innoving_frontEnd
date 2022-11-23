import styled from "styled-components";
import { Link } from 'react-router-dom';


export const BotonSimple = styled.button`
    padding: 10px;
    margin-right: 4px;
    margin-top: 2px;
    margin-bottom: 2px;
    cursor: pointer;
    background-color: ${props => props.theme.colorInnoving.moradoClaro};
    color: ${props => props.theme.colorInnoving.blanco};
    border: 1px solid ${props => props.theme.colorInnoving.blanco};
    border-radius: 5px;
`
export const BotonExtendido = styled(BotonSimple)`
    background-color: ${props => props.theme.coloresInterfaz.verde};
`

export const BotonIcon = styled.i`
    font-size: 36px;
    display: inline;
    color: none;
    top: 10px;
    cursor: pointer;
    position: relative;
`

export const LinkInnoving = styled(Link)`
    display: flex;
    text-decoration: none;
    padding-bottom: 10px;
    font-size:x-large;
    color: ${props => props.theme.colorInnoving.blanco};
    justify-content: center;
`

export const LinkInnoving2 = styled(LinkInnoving)`
    justify-content: flex-start;
    background-color: black;
    margin: 0px 0px 20px 0px;
    padding-top: 10px;
    padding-left: 10px;
    width: 100vw;
    align-items: center;
`



/*
    background-color: ${props => props.theme.colorInnoving.moradoClaro};
    color: ${props => props.theme.colorInnoving.blanco};
    cursor: pointer;
    padding: 10px;
    text-decoration: none;
    transition: all 0.4 ease;
*/