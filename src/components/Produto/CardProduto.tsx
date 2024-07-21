import useCarrinho from "@/data/hooks/useCarrinho"
import Produto from "@/data/model/Produto"
import Image from "next/image"

export interface CartaoProdutoProps{
    produto: Produto


}
export default function CardProduto(props: CartaoProdutoProps){
    const {adicionar} = useCarrinho()
    const {nome, descricao, preco, imagem} = props.produto
    return(
        <>
        <div className="flex flex-col  w-72 bg-slate-950 rounded-md p-1 justify-center items-center">
            <div className=" relative w-72 h-52">
            <Image src={imagem} alt={nome} fill className="object-cover rounded-md"/>
            </div>
            <div className=" flex-1 flex flex-col gap-4">
             <h2>{nome}</h2>
             <p className="flex-1 text-zinc-400 ">{descricao}</p>
             <div className=" flex justify-between items-center">
                 <span className="text-lg font-bold mt-2">{preco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</span>
                 <button onClick={()=> adicionar(props.produto)}  className="border rounded-full px-4 py-1 text-sm  ">Adicionar</button>
             </div>

            </div>
        </div>
        
        
        </>
    )
}