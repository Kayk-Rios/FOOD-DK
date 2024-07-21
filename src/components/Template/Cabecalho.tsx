import Carrinho from "./Carrinho";
import Logo from "./Logo";


export default function Cabeçalho(){
    return(
        <>
        <header className="flex justify-between items-center bg-amber-400 h-20 px-10 ">
             <Logo/> 
             <Carrinho/>
        </header>
        </>
    )
}