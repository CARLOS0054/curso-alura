// // CAPTURANDO ELEMENTOS POR ID
// let titulo = document.getElementById('titulo1');

// // CAPTURANDO ELEMENTOS POR CALSS:
// let titulo2= document.getElementsByClassName("titulo2");

// // CAPTURANDO ELEMENTOS POR TAG
 let tag= document.getElementsByTagName("p");
  
 console.log(tag);

// TESTE

//let novotitulo = document.getElementById('titulo1') .innerHTML = prompt("DIGITE SEU NOME")

let mensagem = prompt("gostaria de saber o segredo do universo? digite 1 para sim e 2 para não.")
if (mensagem ==="1"){
    let novoelemento = document.createElement ("h2");
novoelemento.innerHTML = "youre a gay :p!";
document.body.appendChild (novoelemento);

} else if(mensagem ==="2"){
    let elemento = document.createElement ("h2");
elemento.innerHTML = "vc não é curioso, legaaal!!";
document.body.appendChild (elemento);


}

let removerparagrafo =document.getElementById ("paragrafo");
removerparagrafo.remove();
