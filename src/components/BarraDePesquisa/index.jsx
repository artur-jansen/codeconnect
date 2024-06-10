import styled from "styled-components"
import Lupa from "./assets/search.svg"
import { useState } from "react"

const InputBarraDePesquisa = styled.input`
    width: 100%;
    height: 49px;
    color: var(--cinza-claro);
    padding: 0.5rem 1rem 0.5rem 4rem;
    font-family: var(--fonte);
    background: var(--cinza-escuro) url(${Lupa}) no-repeat 32px;
    border: none;
    border-radius: 8px;
`

export default function BarraDePesquisa(){
    const [termoPesquisa, setTermoPesquisa] = useState('');
    return(
        <InputBarraDePesquisa type="search" placeholder="Digite o que você procura..." value={termoPesquisa} onChange={(evento) => setTermoPesquisa(evento.target.value)}/>
    )
}