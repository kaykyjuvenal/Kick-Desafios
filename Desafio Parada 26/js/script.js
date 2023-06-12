var cidadesPorEstado = {
    SP: ["São Paulo","São Carlos","Ribeirão Preto"],
    RJ: ["Rio de Janeiro", "Volta Redonda", "Angra"],
    MG: ["Belo Horizonte","Uberlandia","Ouro Preto"]
};

function mostrarCidades(){
    var estadoSelect = document.getElementById("estado");
    var cidadeSelect = document.getElementById("cidade");

    //limpa cidades antigas
    cidadeSelect.innerHTML = "";

    //pegar o estado selecionado
    var estadoSelecionado = estadoSelect.value;

    if(estadoSelecionado){
        var cidades = cidadesPorEstado[estadoSelecionado];
        if(cidades){
            cidades.forEach(function(cidade){
                adicionarCidade(cidade,cidadeSelect);
            });
        }
    }
}
function adicionarCidade(cidade,select){
    var option = document.createElement("option");
    option.text = cidade;
    select.add(option);
}