var numeroSecreto = parseInt(Math.random() * 1001);

while(chute != numeroSecreto) { // sinal de negação representado em : !=

    var chute = prompt ('digite um número da sorte entre 1 e 1000')

    //se o chute for igual ao número secreto 
    //alert = acertou
    if (chute == numeroSecreto){
        alert('acertou!')
    }
    else if( chute > numeroSecreto){
        alert('errouuuuu... o número secreto é menor!')

    }
    else if(chute < numeroSecreto){
        alert('errouuuu... o número secreto é maior!')
    }
}

//sucesso!
