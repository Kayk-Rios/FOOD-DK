"use client";
import { createContext, useState } from "react";

interface ContextoCarrinhoProps{
  numero: number;
  incremento: ()=>void;
  decremento: ()=>void;
}

const ContextoCarrinho = createContext<ContextoCarrinhoProps>({} as any  );

export default function ProvedorCarrinho(props: any) {
  const [numero,setNumero]= useState(0)
  return (
    <>
      <ContextoCarrinho.Provider
        value={{
          numero,
          incremento: () => setNumero(numero+1),
          decremento: () => setNumero(numero-1),
        
        }}
      >
        {props.children}
      </ContextoCarrinho.Provider>
    </>
  );
}

export { ContextoCarrinho };
