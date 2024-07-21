"use client";
import { createContext, useState } from "react";
import ItemCarrinho from "../model/ItemCarrinho";
import Produto from "../model/Produto";

interface ContextoCarrinhoProps {
  itens: ItemCarrinho[];
  qtdDitens:number,
  adicionar: (item: Produto) => void;
  remover:  (item: Produto) => void;
}

const ContextoCarrinho = createContext<ContextoCarrinhoProps>({} as any);

export default function ProvedorCarrinho(props: any) {
  const [itens, setItens] = useState<ItemCarrinho[]>([]);
  function adicionar(produto: Produto) {
    const indice = itens.findIndex((i) => i.produto.id === produto.id);

    if (indice === -1) {
      setItens([...itens, { produto, quantidade: 1 }]);
    } else {
      const novosItnes = [...itens];
      novosItnes[indice].quantidade++;
      setItens(novosItnes);
    }
  }
  function remover(produto: Produto){
    const novosItnes = itens.map((i)=>{
      if (i.produto.id === produto.id){
        i.quantidade--
      }
      return i
    }).filter((i)=>i.quantidade > 0)
    setItens(novosItnes)
  }
  return (
    <>
      <ContextoCarrinho.Provider
        value={{
          itens,
          adicionar,
          remover,
          get qtdDitens(){
            return itens.reduce((total, item) => total + item.quantidade, 0);
          }

        }}
      >
        {props.children}
      </ContextoCarrinho.Provider>
    </>
  );
}

export { ContextoCarrinho };
