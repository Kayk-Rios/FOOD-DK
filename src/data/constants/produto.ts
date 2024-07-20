import Produto from "@/data/model/Produto";

const produtos : Produto[] = [

    {
        id: 1,
        nome: 'Pizza Margherita',
        preco: 39.99,
        descricao: 'Pizza clássica com molho de tomate, mussarela e manjericão',
        imagem: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        id: 2,
        nome: 'Hambúrguer Clássico',
        preco: 24.99,
        descricao: 'Hambúrguer com carne bovina, queijo, alface, tomate e molho especial',
        imagem: 'https://images.unsplash.com/photo-1602192103300-47e66756152e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        id: 3,
        nome: 'Sushi Combo',
        preco: 59.99,
        descricao: 'Combo de sushi com 20 peças variadas',
        imagem: 'https://images.unsplash.com/photo-1607247098789-6a43ebeaba4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        id: 4,
        nome: 'Salada Caesar',
        preco: 19.99,
        descricao: 'Salada Caesar com alface, frango grelhado, croutons e molho Caesar',
        imagem: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        id: 5,
        nome: 'Bolo de Chocolate',
        preco: 14.99,
        descricao: 'Delicioso bolo de chocolate com cobertura de ganache',
        imagem: 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?q=80&w=1950&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    }

];
export default produtos;