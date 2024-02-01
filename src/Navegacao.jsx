export function Navegacao(props) {
    return <div className="navegacao">{/*className --> para puxar classe do css*/}

        <input type="radio" name="opcao-pagina" id="pagina-0" defaultChecked onClick={() => props.atualizar_pagina_selecionada(0)}/>
        <label htmlFor="pagina-0">Pratos Principais</label>
        <input type="radio" name="opcao-pagina" id="pagina-1" onClick={() => props.atualizar_pagina_selecionada(1)} />
        <label htmlFor="pagina-1">Sobremesas</label>
        <input type="radio" name="opcao-pagina" id="pagina-2" onClick={() => props.atualizar_pagina_selecionada(2)} />
        <label htmlFor="pagina-2">Bebidas</label>
    </div>
}