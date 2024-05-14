//LIFO - último a entra primeiro a sair

//encapsulamento das funções em classe
class Stack {
    constructor() {
        //No método construtor defini uma propriedade chamada elementos 
        this.elementos = []; //uma array vazia para armazenar os elementos da pilha
    }

    //outros métodos da classe:

    //inserir um elemento no topo da pilha
    inserir(elemento) {
        return this.elementos.push(elemento)
    }

    //remover um elemento no topo da pilha
    remover () {
        return this.elementos.pop()
    }

    //verifica o elemento no topo da pilha sem remover
    verifica () {
        return this.elementos[this.size()-1];
    }

    //retorna o tamanho da pilha
    size() {
        return this.elementos.length;
    }

    //verifica se a pilha tá vazia
    isEmpty() {
        return this.elementos.length === 0;
    }

    limpa(){
        return this.elementos.splice();
    }

    obtemPosicao(x){
        for(var i=0; i<pilha.size(); i++){
            if (this.elementos[i] == x) return i;
        }
        return null;
    }

    obtemElemento(posicao){
        return this.elementos[posicao];
    }


    //algumas funções que podem ser implementadas futuramente:
    /** Clonas a pilha
     * Inverter a pilha
     * concaternas pilhas
     * ordernar a pilha
    */
}

var pilha = new Stack();


pilha.inserir(1);
pilha.inserir(2);
pilha.inserir(3);


console.log("elementos da pilha:");
for(var i=0; i<pilha.size(); i++){
    console.log(pilha.elementos[i]);
}

pilha.remover();
console.log(pilha);

console.log(pilha.verifica());
console.log(pilha.limpa());
console.log(pilha.obtemPosicao(2));
console.log(pilha.obtemElemento(1));






