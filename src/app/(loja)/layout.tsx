import ProvedorCarrinho from "@/data/context/ContextoCarrinho";

export default function Layout(props : any){
    return(
        <>
        <div >
            <ProvedorCarrinho>{props.children}</ProvedorCarrinho>
        </div>

        </>
    )
}