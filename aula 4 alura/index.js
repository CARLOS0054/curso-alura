function adicionarFilme(){
    var filmeFavorito =
    document.getElementById("filme").value

   

    var elementosListaFilmes = document.getElementById('listaFilmes')
    elementosListaFilmes.innerHTML = elementosListaFilmes.innerHTML + '<img src =' + filmeFavorito + '>'
    document.getElementById('filme').value = ""
}