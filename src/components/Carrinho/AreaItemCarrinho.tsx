import ItemCarrinho from "@/data/model/ItemCarrinho";
import Image from "next/image";

export interface AreaItemCarrinhoProps {
  item: ItemCarrinho;
  adicionar?: (item: ItemCarrinho) => void;
  remover?: (item: ItemCarrinho) => void;
}

export default function AreaItemCarrinho(props: AreaItemCarrinhoProps) {
  return (
    <>
      <div className="flex items-center gap-5 bg-zinc-900 rounded-md overflow-hidden ">
        <div className="relative w-28 h-28 gap-3 ">
          <Image
            src={props.item.produto.imagem}
            fill
            className="object-cover"
            alt={props.item.produto.descricao}
          />
        </div>
        <div className="flex flex-col justify-center flex-1  ">
          <span className="text-xl font-bold">{props.item.produto.nome}</span>
          <span className="text-xl text-slate-400 ">
            {props.item.produto.descricao}
          </span>
          <div className="flex items-center ga-2 mt-2 text-zinc-400 text-lg font-bold">
            <span>R$ {props.item.produto.preco.toFixed(2)} </span>
            <span className="mx-2"> x </span>
            <span> {props.item.quantidade} = </span>
            <span className="text-yellow-200">
              {" "}
              R$ {(props.item.produto.preco * props.item.quantidade).toFixed(2)}
            </span>
          </div>
        </div>

        <div className=" flex gap-2 items-center px-5 ">
          <button onClick={() => props.remover?.(props.item)}>-</button>
          <span className="flex px px-4 py-2 rounded-md bg-black">
            {props.item.quantidade}
          </span>
          <button onClick={() => props.adicionar?.(props.item)}>+</button>
        </div>
      </div>
    </>
  );
}
