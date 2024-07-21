"use client";

import Link from "next/link";

export default function PaginaCarrinhoVazio() {
  return (
    <>
      <div className="flex flex-col items-center gap-4 text-zinc-400">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler w-[150px] h-[150px] icon-tabler-shopping-cart-off"
          width="44"
          height="44"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#2c3e50"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <path d="M17 17a2 2 0 1 0 2 2" />
          <path d="M17 17h-11v-11" />
          <path d="M9.239 5.231l10.761 .769l-1 7h-2m-4 0h-7" />
          <path d="M3 3l18 18" />
        </svg>
        <div>
          <h2>Seu carrinho esta vazio</h2>
          <p>Adcione produtos clicando no butao abaixo</p>
        </div>
        <div className=" bg-yellow-300 rounded-sm p-1">
          <Link href="/"> Ver Produtos</Link>
        </div>
      </div>
    </>
  );
}
