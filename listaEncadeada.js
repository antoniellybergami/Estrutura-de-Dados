//é tipo uma array onde os elementos não são armazenados em indice mas sim 
//cada elemento é um objeto independente que contém um ponteiro para o próximo elemento da lista

//nó da lista
class Node { 
    constructor(value, prox = null) { //caso nenhum valor seja passado, vai ser num
        this.data = value;
        this.next = prox;
    }
}

class LinkedList {
    constructor(){ 
        this.head = null; //nó cabeça
        this.size = 0; //tamanho da lista
    }

    //inserir um nó no inicio da lista
    insereComeco(data){
        this.head = new Node(data, this.head);
        this.size++;
    }

    //insere um nó no final da lista
    insereFinal(data){
        let novoNo = new Node(data);
        let noAtual;

        if(!this.head) { //verifica se a lista tá vazia
            this.head = novoNo;
        } else {
            noAtual = this.head;

            //percorre a lista até o último nó
            while(noAtual.next){
                noAtual = noAtual.next;
            }

            noAtual.next = novoNo;
        }
        this.size++;
    }

    //inserir um nó em posição especifica
    inserePosicao(data, index){
        if(index === 0) { //caso seja a primeira posição
            this.insereComeco(data);
            return;
        }

        let no = new Node(data);
        let noAtual;
        let noAnterior;

        noAtual = this.head;
        let contador = 0;

        while(contador < index){
            noAnterior = noAtual; //nó antes do index
            contador++;
            noAtual = noAtual.next;//nó após o index
        }

        no.next = noAtual;
        noAnterior = no;

        this.size++;
    }

    //inserir um nó após um nó especifico
    insereAposNode(data, noAnterior){
        if (noAnterior === null) { //se o nó for nulo, signifca que quero inserir no começo, então:
            this.insereComeco(data);
            return;
        }

        let novoNo = new Node(data);
        novoNo.next = noAnterior.next; //como o novo nó vai ficar após o "noAnterior", naturalmente ele ira apontar para o noAnterior ->
        noAnterior.next = novoNo; //e o "noAnterior -> next" irá apontar para o novoNo que agr vem após ele
    }



    //esvaziar a lista
    limpar(){
        return this.head = null;
        this.size = 0;
    }

    //verifica se a lista está vazia
    isEmpety(){
        return this.head === null;
    }

    //obtem o ultimo elemento da lista
    pegaUltimo(){
        let lastNode = this.head;
        if(lastNode) { 
            while(lastNode.next){
                lastNode = lastNode.next;
            }
        }
        return lastNode;
    }

    //obtem o primeiro elemento da lista
    pegaPrimeiro(){
        return this.head;
    }

    //quantidade de nós -> (para esse caso n preciso por já estou armazenando na variável size)
    tamanho(){  
        let count = 0;
        let node = this.head;
        while (node) {
            count++;
            node = node.next;

        }
        return count;
    }
    
    

}

const ll = new LinkedList();
ll.insereComeco(100);
ll.insereComeco(200);

console.log(ll);

