import Logo from "./assets/img-logo.svg"
import Feed from "./assets/img-feed.svg"
import Perfil from "./assets/img-perfil.svg"
import Info from "./assets/img-info.svg"
import Saida from "./assets/img-saida.svg"

import styled from "styled-components"
import { useEffect, useState } from "react"

const MenuLateral = styled.aside`
    display: flex;
    flex-direction: column;
    background-color: var(--cinza-escuro);
    padding: 2.5rem 1rem;
    width: 50vw;
    border-radius: 8px;

    @media (max-width: 420px){
        background-color: rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(50px);
        width: 100vw;
        position: fixed;
        bottom: 0;       
        height: 10%;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 0.5rem 0;
        border-radius: 8px 8px 0 0;
    }
`

const ListaItensPai = styled.nav`
    display: flex;
    flex-direction: column;
    @media (max-width: 420px){
        width: 100%;
    }
`

const ListaItens = styled.ul`

`

const Itens = styled.li`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-top: 5rem;
    list-style: none;

    @media (max-width: 420px){
        flex-direction: row;
        margin-top: 0;
        align-items: center;
        gap: 0.5rem;
        justify-content: space-around;
    }
`

const ItemPublicar = styled.a`
    display: flex;
    flex-direction: column;
    align-items: center;    
    list-style: none;
    text-decoration: none;
    border: 1px solid var(--verde-destaque);
    border-radius: 8px;
    padding: 0.75rem;
    color: var(--verde-destaque);

    &:hover{
        cursor: pointer;
        transition: 3s;
        color: var(--branco-padrao);
        background: var(--verde-destaque);
    }
`

const Item = styled.a`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    list-style: none;
    text-decoration: none;
    color: var(--cinza-medio);
    @media (max-width: 420px) {
        gap: 1px;
    }
`

const ImgLogo = styled.img`
    &:hover{
        cursor: pointer;
    }

    @media (max-width: 420px){
        display: none;
    }
`
function handleLogoClick(){
    event.preventDefault()
}

export default function Sidebar(){
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 420);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 420);
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])
 
    return(
        <MenuLateral>
            <ImgLogo src={Logo} alt="Logo codeconnect" onClick={handleLogoClick}/>
            <ListaItensPai>
                <ListaItens>
                    <Itens>
                        <ItemPublicar href="#">{isMobile ? 'P':'Publicar'}</ItemPublicar> 
                        <Item href="#">
                            <img src={Feed}/>
                            <span>Feed</span>
                        </Item> 
                        <Item href="#">
                        <img src={Perfil}/>
                        <span>Perfil</span>
                        </Item> 
                        <Item href="#">
                        <img src={Info}/>
                        <span>Sobre nós</span>
                        </Item> 
                        <Item href="#">
                        <img src={Saida}/>
                        <span>Sair</span>
                        </Item> 
                    </Itens>
                </ListaItens>
            </ListaItensPai>
        </MenuLateral>
    )
}