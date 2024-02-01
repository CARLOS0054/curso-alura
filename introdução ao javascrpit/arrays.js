let cargos= [
    "administrador", "fiscal", "médico", "analista de sistemas"
]
// para alterar um item colocamos dessa maneira no array
    cargos[0]= "gerente";
// para adicionar itens na lista sem precisar alterar diretamente na variável usa-se o seguinte:
  cargos.push("auxiliar geral")
//   usando o pop diferente do push vai eliminar o ultimo item dessa lista.
cargos.pop();



 console.log(cargos);