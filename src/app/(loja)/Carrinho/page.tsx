"use client";

import AreaItemCarrinho from "@/components/Carrinho/AreaItemCarrinho";
import Pagina from "@/components/Template/Pagina";
import useCarrinho from "@/data/hooks/useCarrinho";







export default function PaginaCarrinho(){
    const{itens} = useCarrinho()

    return(
        <>
        <Pagina>
          {itens.map((item)=>(
                <AreaItemCarrinho key={item.produto.id} item={item} />
            ))}
        </Pagina>

        </>
    )
}
