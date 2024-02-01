function soma(num1,num2){
    return num1 + num2;

}

function subitracao(num1,num2){
    return num1 - num2;

}
function multiplicacao(num1,num2){
    return num1 * num2;

}
function divisao(num1,num2){
    return num1 / num2;

}

let parametro =parseFloat(prompt("insira o primeiro numero a ser calculado"));
let parametro1= parseFloat(prompt("insira o segundo numero a ser calculado"));
let resultado= prompt("escolha a operação a ser calculada: 1 para soma, 2 para subitração, 3 para multiplicação, 4 para divisão!");

    if (resultado ==="1"){
        alert(soma(parametro , parametro1));
    } else if (resultado ==="2"){
        alert (subitracao(parametro , parametro1));
    } else if (resultado ==='3'){
        alert (multiplicacao (parametro , parametro1));
    } else if(resultado ==='4'){
        alert (divisao(parametro, parametro1));
    } else {
         alert("operação digitada errada! tente novamente.")
     }
