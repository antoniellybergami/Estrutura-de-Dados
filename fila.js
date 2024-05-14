//FIFO - Primeiro a entrar, primeiro a sair
class Queue {
    constructor(){
        this.elementos = [];
    }

    //incluir um novo elemento no final da fila
    inserir(elemento) {
        this.elementos.push(elemento);
    }

    //remover um elemento do começo da fila (elemento de indice 0, e diminiu em 1 o indice dos outros elementos )
    remove() {
        this.elementos.shift();
    }

    //retorna o tamanho da fila
    size() {
        return this.elementos.length;
    }

    //verifica se a lista tá vazia
    isEmpty() {
        return this.elementos.length === 0;
    }

    //verifica o primeiro elemento
    first(){
        return this.elementos[0];
    }

    //limpar fila
    limpa(){
        return this.elementos.splice();
    }

    obtemPosicao(x){
        for(var i=0; i<fila.size(); i++){
            if (this.elementos[i] == x) return i;
        }
        return null;
    }

    obtemElemento(posicao){
        return this.elementos[posicao];
    }

     //algumas funções que podem ser implementadas futuramente:
    /** iterar sobre todos os elementos
     * Inserir em posição especifica
     * Remover por valor - remove o primeiro elemento com determinado valor
     * Clonar a fila
     * concaternas filas
    */
}

var fila = new Queue();

fila.inserir(1);
fila.inserir(2);
console.log(fila);

fila.remove();
console.log(fila);

console.log(fila.isEmpty());
console.log(fila.size());
console.log(fila.first());

console.log(fila.limpa());


