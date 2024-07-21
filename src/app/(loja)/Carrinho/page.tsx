"use client";

import AreaItemCarrinho from "@/components/Carrinho/AreaItemCarrinho";
import PaginaCarrinhoVazio from "@/components/Carrinho/PaginaCarrinhoVazio";
import TotalCarrinho from "@/components/Carrinho/TotalCarrinho";
import Pagina from "@/components/Template/Pagina";
import useCarrinho from "@/data/hooks/useCarrinho";

export default function PaginaCarrinho() {
  const { itens, adicionar, remover } = useCarrinho();

  return (
    <>
      <Pagina>
        {itens.length === 0 ? (
          <PaginaCarrinhoVazio />
        ) : (
          <>
          
            <div className="flex  flex-col gap-5 m-3">
              {itens.map((item) => (
                <AreaItemCarrinho
                  key={item.produto.id}
                  item={item}
                  adicionar={(item) => adicionar(item.produto)}
                  remover={(item) => remover(item.produto)}
                />
              ))}
            </div>
            <TotalCarrinho item={itens}/>
          </>
        )}
      </Pagina>
    </>
  );
}
