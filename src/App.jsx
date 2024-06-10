import Sidebar from './components/MenuLateral'
import BarraDePesquisa from './components/BarraDePesquisa'
import styled from 'styled-components'
import Filtro from './components/Filtros'
import Card from './components/Card'
import Ordenacao from './components/Ordenacao'
import { useEffect, useState } from 'react'

const ContainerApp = styled.div`
  width: 62vw;
  margin: 3.5em auto;
  display: flex;
  gap: 1rem;
`
const Div = styled.div`
  flex-grow: 2;
`
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 1fr;
  gap: 1.5rem;
  flex-wrap: wrap;
`
function App() {

  const [dados, setDados] = useState([]);
  useEffect(() =>{
    fetch('https://my-json-server.typicode.com/MonicaHillman/codeconnect-api/publicacoes')
    .then(resposta => resposta.json())
    .then(dados => setDados(dados))
  },[])

  return (
    <ContainerApp>
      <Sidebar/>
      <Div>
        <BarraDePesquisa/>
        <Filtro></Filtro>
        <Ordenacao/>
        <Cards>
          {dados ? dados.map((item, index) => (
            <li key={index}>
              <Card id={item.id}  imagemUrl={item.imagem_capa} titulo={item.titulo} resumo={item.resumo} LinhasDeCodigo={item.linhas_de_codigo} compartilhamentos={item.compartilhamentos} comentarios={item.comentarios} usuario={item.usuario}/>
            </li>
          )) : null}
        </Cards>
      </Div>
    </ContainerApp>
  )
}

export default App
