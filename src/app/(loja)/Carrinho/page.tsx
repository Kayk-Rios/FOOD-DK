"use client";

import Pagina from "@/components/Template/Pagina";
import {ContextoCarrinho} from "@/data/context/ContextoCarrinho";
import useCarrinho from "@/data/hooks/useCarrinho";





export default function PaginaCarrinho(){
  const { numero } =  useCarrinho()
    return(
        <>
        <Pagina>
            <div>Carrinho : {numero}</div>
        </Pagina>

        </>
    )
}
