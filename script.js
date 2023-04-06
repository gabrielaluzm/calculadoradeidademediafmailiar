document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();
    var qtdMembros = parseInt(document.getElementById('qtdMembros').value);
    var totalsomaidade = 0;

    for (var contador = 1; contador <= qtdMembros; contador++) {
        var idade = parseInt(prompt("Digite a idade do membro da família " + contador + ":"));
        totalsomaidade += idade;
    }

    var media = totalsomaidade / qtdMembros;
    document.getElementById('resultado').innerHTML = "A idade média da família é: " + media.toFixed(2) + " anos.";
});
