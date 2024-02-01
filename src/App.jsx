import { useState } from "react"; //para usar a variavel de estado (useState())

import Hashtaurante from "./assets/hashtaurante.webp";
import './App.css'; {/*para importar ss*/}
import { Navegacao } from "./Navegacao";
import { ItemCardapio } from "./ItemCardapio";
import { pratosPrincipais, sobremesas, bebidas } from "./cardapio";


export function App() {
  const pagina_menu = [pratosPrincipais, sobremesas, bebidas];
  const [pagina_selecionada, atualizar_pagina_selecionada] = useState(0); //variavel de estado

  return <>
          <img src={Hashtaurante} alt="" className="capa" />
          {/*className --> para puxar classe do css*/}
          <Navegacao atualizar_pagina_selecionada={atualizar_pagina_selecionada}/> {/*Navegacao contem os tres botões*/}
          <div className="menu">
            {pagina_menu[pagina_selecionada].map(item => <ItemCardapio nome={item.nome} descricao={item.descricao} preco={item.preco} imagem={item.imagem}/>)}

          </div>
        </>
}