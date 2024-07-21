import ItemCarrinho from "@/data/model/ItemCarrinho";

export interface TotalCarrinhoProps {
  item: ItemCarrinho[];
}

export default function AreaItemCarrinho(props: TotalCarrinhoProps) {
  const total = props.item.reduce(
    (add, item) => add + item.produto.preco * item.quantidade,
    0
  );
  return (
    <>
      <div className="flex justify-around items-center gap-2 bg-zinc-900 rounded-md overflow-hidden finalizar ml-2.5 ">
        <div className="flex flex-col justify-around">
          <span className="text-zin-400">Total</span>
          <span className="text-3xl font-bold text-yellow-300">
            R$ {total.toFixed(2)}
          </span>
        </div> 
         <button className="bg-yellow-400 px-1 py-2 rounded-md">
          Finalizar
        </button>
      </div>

   
      
   
    </>
  );
}
