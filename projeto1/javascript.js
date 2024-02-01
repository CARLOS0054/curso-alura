let listadefotos = [
    {
        "nome": "Ansiedade",
        "img": "img/ansiedade.png",
        "descrição": "este problema é muito recorrente entre as pessoas."
    },
    {
        "nome": "Frustração",
        "img": "img/frustracao.png",
        "descrição": "este problema é muito recorrente entre as pessoas."
    },
    {
        "nome": "Insonia",
        "img": "img/insonia.png",
        "descrição": "este problema é muito recorrente entre as pessoas."
    },
    {
        "nome": "Pressão",
        "img": "img/pressao.png",
        "descrição": "este problema é muito recorrente entre as pessoas."
    },
    {
        "nome": "Procastinação",
        "img": "img/procastinacao.png",
        "descrição": "este problema é muito recorrente entre as pessoas."
    },
    {
        "nome": "Problemas Conjugais ",
        "img": "img/relacionamento.png",
        "descrição": "este problema é muito recorrente entre as pessoas."
    },


]
listadefotos.map((problemas, posicao) => {
    let cardimg = document.getElementById("cards");
    cardimg.innerHTML += `
    <div class= "col-md-4">
    <div class="card m-2">
                    <img src="${problemas.img}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${problemas.nome}</h5>
                        <a href="#" class="btn btn-secundary" onClick = "zoomimg('${posicao}')"><i class="bi bi-zoom-in"> </i></a>
                    </div>
                </div>
                </div>
    `

})

function zoomimg(posicao) {
    let imagemSelecionada = listadefotos[posicao];
    document.getElementById("nomecarro").innerHTML = imagemSelecionada.nome;
    document.getElementById("descricaoproblema").innerHTML = imagemSelecionada.descrição;
    document.getElementById("imgmodal").src = imagemSelecionada.img;

    new bootstrap.Modal('#zoomimg').show();
}


