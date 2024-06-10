import styled from "styled-components"

const ContainerFiltro = styled.section`
    margin: 1rem 0;
`

const ContainerListaItensFiltro = styled.ul`
    display: flex;
    justify-content: space-between;
`

const ItemListaFiltro = styled.li`
    background: var(--cinza-claro);
    color: var(--cinza-escuro);
    font-size: 18px;
    padding: 0.25rem 0.5rem;
    border-radius: 8px;
    list-style: none;
` 

const BotaoLimparFiltro = styled.button`
    border: none;
    background-color: transparent;
    color: var(--cinza-medio);
    font-size: 18px;
`

export default function Filtro(){
    return(
     <ContainerFiltro>
        <ContainerListaItensFiltro>
            <ItemListaFiltro>Programação</ItemListaFiltro>
            <BotaoLimparFiltro>Limpar tudo</BotaoLimparFiltro>
        </ContainerListaItensFiltro>
     </ContainerFiltro>  
    )
}