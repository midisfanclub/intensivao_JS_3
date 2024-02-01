import Hashtaurante from "./assets/hashtaurante.webp";
import './App.css'; {/*para importar ss*/}
import { Navegacao } from "./Navegacao";
import { ItemCardapio } from "./ItemCardapio";
import { pratosPrincipais, sobremesas, bebidas } from "./cardapio";


export function App() {
  
  return <>
          <img src={Hashtaurante} alt="" className="capa" />
          {/*className --> para puxar classe do css*/}
          <Navegacao /> {/*Navegacao contem os tres botões*/}
          <div className="menu">
            {pratosPrincipais.map(item => <ItemCardapio nome={item.nome} descricao={item.descricao} preco={item.preco} imagem={item.imagem}/>)}

          </div>
        </>
}