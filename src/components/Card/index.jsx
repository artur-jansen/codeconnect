import Code from "./assets/code.svg"
import Share from "./assets/share.svg"
import Chat from "./assets/chat.svg"
import Icone from "./assets/Icon-User.png"
import styled from "styled-components"

const ContainerCard = styled.article`
    margin-top: 3rem;
    color: var(--cinza-claro);
    text-decoration: none;
    background: var(--cinza-escuro);
    border-radius: 8px;
    width: 100%;
    display: grid;
`

const ContainerImagemPrincipalCard = styled.div`
    width: 100%;
    height: 240px;
    background-color: var(--cinza-claro);
    border-radius: 8px;

    display: flex;
    justify-content: center;
    align-items: center;
`
const ImagemPrincipalCard = styled.img`
    width: 90%;
    height: 80%;
    object-fit: cover;
    border-radius: 8px;
    box-shadow: 0px 16px 24px 0px #0000003D;
`

const ConteudoCard = styled.div`
    padding: 16px;
    height: 100%;
    display: grid;
    grid-template-rows: 3;
    grid-template-columns: 1;
`

const ConteudoTextoCard = styled.div`
    grid-row: 1;
`

const ConteudoTextoCardTitulo = styled.h3`
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 8px;
`
const ConteudoDescricaoCard = styled.div`
    grid-row: 2;
    align-items: top;
    justifi-content: top;
`

const ConteudoTextoCardResumo = styled.p`
    font-size: 15px;
    font-weight: 400;
    line-height: 23px;
`

const ConteudoRodapeCard = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-grow: 0;
    grid-row: 3;
`

const ListaRodapeCard = styled.ul`
    display: flex;
    gap: 16px;
    list-style: none;
    align-items: baseline;
    margin-top: 1rem;
`

const ItemRodapeCard = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    font-size: 15px;
`

const UsuarioRodapeCard = styled.div`
    display: flex;
    align-items: center
`

export default function Card({id, imagemUrl, titulo, resumo, LinhasDeCodigo, compartilhamentos, comentarios, usuario}){
    return(
        <ContainerCard id={id}>
            <ContainerImagemPrincipalCard>
                <ImagemPrincipalCard src={imagemUrl} alt="imagem do card" />
            </ContainerImagemPrincipalCard>
            <ConteudoCard>
                <ConteudoTextoCard>
                    <ConteudoTextoCardTitulo>{titulo}</ConteudoTextoCardTitulo>
                </ConteudoTextoCard>
                <ConteudoDescricaoCard>
                    <ConteudoTextoCardResumo>{resumo}</ConteudoTextoCardResumo>
                </ConteudoDescricaoCard>
                    <ConteudoRodapeCard>
                        <ListaRodapeCard>
                            <ItemRodapeCard>
                                <img src={Code} alt="códigos"/>
                                {LinhasDeCodigo}
                            </ItemRodapeCard>
                            <ItemRodapeCard>
                                <img src={Share} alt="compartilhamentos"/>
                                {compartilhamentos}
                            </ItemRodapeCard>
                            <ItemRodapeCard>
                                <img src={Chat} alt="comentários"/>
                                {comentarios}
                            </ItemRodapeCard>
                        </ListaRodapeCard>
                        <UsuarioRodapeCard>
                            <img src={Icone} alt="Icone usuário"/>
                            @Artur
                        </UsuarioRodapeCard>
                    </ConteudoRodapeCard>
            </ConteudoCard>
        </ContainerCard>
    )

}