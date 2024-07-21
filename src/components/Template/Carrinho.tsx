import useCarrinho from "@/data/hooks/useCarrinho";
import Link from "next/link";

export default function Carrinho() {
    const {qtdDitens} = useCarrinho()
  return (
    <>
      <div>
        <Link href="/Carrinho" className="text-xl leading-4">
          <div className="mt-[25px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-shopping-cart relative left-[-25px] top-[-16px] "
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
              <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
              <path d="M17 17h-11v-14h-2" />
              <path d="M6 5l14 1l-1 7h-13" />
            </svg>
            <div className="absolute  -top-0 w-6 h-6 bg-red-600 rounded-full flex justify-center items-center ">
              {qtdDitens}
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
