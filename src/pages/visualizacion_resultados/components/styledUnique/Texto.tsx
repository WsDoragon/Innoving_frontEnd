import styled from 'styled-components'

export const Texto = styled.p`
    display: inline;
`

export const TextoNegrita = styled(Texto)`
    font-weight: bold;
    font-family: sans-serif;

`
export const TextoTitulo = styled.p`
    display: block;
    padding: 10px 5px 10px 5px;
`


export const TextoTituloNegrita = styled(TextoTitulo)`
    font-weight: bold;
`

export const TextoTituloPrincipal = styled(TextoTitulo)`
    font-size: 24px;
`

export const TextoBlock = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-gap: 10px;
    padding-left: 4px;
    padding-bottom: 4px;
    padding-top: 4px;
`

export const TextoBlockTable = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
    padding-left: 4px;
    padding-bottom: 4px;
    padding-top: 4px;
`

export const EtiquetasIndicadores = styled.span`
    background: #E9D8FD;
    color: #44337A;
    display: inline-block;
    white-space: nowrap;
    vertical-align: middle;
    padding-inline-start: 0.25rem;
    padding-inline-end: 0.25rem;
    font-weight: bold;
    font-size: 0.75rem;
    text-transform: uppercase;
    border-radius: 0.125rem;
    margin-inline-end: 0.1rem;
    margin-inline-start: 0.1rem;

`