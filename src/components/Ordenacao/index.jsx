import styled from "styled-components"

const OrdenacaoContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 1rem;
    font-size: 18px;
`

const OrdenacaoRecentes = styled.p`
    color: var(--verde-destaque);
    text-decoration: underline;

    &:hover{
        cursor: pointer;
    }
`

const OrdenacaoGeral = styled.p`
    color: var(--cinza-medio);
    &:hover{
        transition: 1s;
        cursor: pointer;
        color: var(--verde-destaque);
        text-decoration: underline;
    }
`

export default function Ordenacao(){
    return(
        <OrdenacaoContainer>
            <OrdenacaoRecentes>Recentes</OrdenacaoRecentes>
            <OrdenacaoGeral>Geral</OrdenacaoGeral>
        </OrdenacaoContainer>
    )
}