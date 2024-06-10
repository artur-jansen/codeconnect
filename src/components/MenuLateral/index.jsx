import Logo from "./assets/img-logo.svg"
import Feed from "./assets/img-feed.svg"
import Perfil from "./assets/img-perfil.svg"
import Info from "./assets/img-info.svg"
import Saida from "./assets/img-saida.svg"

import styled from "styled-components"

const MenuLateral = styled.aside`
    display: flex;
    flex-direction: column;
    height: 100vh;
    background-color: var(--cinza-escuro);
    padding: 2.5rem 1rem;
    width: 177px;
    border-radius: 8px
`
    
const ListaItensPai = styled.nav`
    display: flex;
    flex-direction: column;
`

const ListaItens = styled.ul`

`

const Itens = styled.li`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-top: 5rem;
    list-style: none;
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
    color: var(--cinza-medio)
`

const ImgLogo = styled.img`
    &:hover{
        cursor: pointer;
    }
`
function handleLogoClick(){
    event.preventDefault()
}

export default function Sidebar(){
    return(
        <MenuLateral>
            <ImgLogo src={Logo} alt="Logo codeconnect" onClick={handleLogoClick}/>
            <ListaItensPai>
                <ListaItens>
                    <Itens>
                        <ItemPublicar href="#">Publicar</ItemPublicar> 
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