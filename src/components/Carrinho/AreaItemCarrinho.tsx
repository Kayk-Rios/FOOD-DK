import ItemCarrinho from "@/data/model/ItemCarrinho"
import Image from "next/image"


export interface AreaItemCarrinhoProps{
item:ItemCarrinho
}

export default function AreaItemCarrinho(props: AreaItemCarrinhoProps){
    return(
        <>
        <div className="flex items-center gap-5 bg-zinc-900 rounded-md overflow-hidden ">
            <div className="relative w-28 h-28 gap-3 ">
                <Image src={props.item.produto.imagem} fill className="object-cover" alt={props.item.produto.descricao}/>
            </div>
        </div>
        </>
    )
}