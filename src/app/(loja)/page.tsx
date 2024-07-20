"use client";

import CardProduto from "@/components/Produto/CardProduto";
import Pagina from "@/components/Template/Pagina";
import produtos from "@/data/constants/produto";
export default function Home() {
  return (
    <div>
      <Pagina>
        <div className="flex justify-center items-baseline gap-5 flex-wrap ">
          {produtos.map(produto => (
            <CardProduto key={produto.id} produto={produto} />
          ))}
        </div>
      </Pagina>
    </div>
  );
}
