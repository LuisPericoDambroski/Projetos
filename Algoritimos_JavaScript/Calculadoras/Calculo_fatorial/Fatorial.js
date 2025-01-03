function calcularfatorial(numero) {
    if (numero === 0 || numero === 1) {
        
        return 1;
    } else {
        return numero * calcularfatorial(numero - 1);
    }
}

function Calculo() {
    var numero = parseInt(document.getElementById("Fatorial").value);

    if (isNaN(numero) || numero < 0) {
        alert("!!Por favor, insira um número inteiro não negativo.!!");
        return;
    }

    var resultado = calcularfatorial(numero);
    document.getElementById("Resultado").innerHTML = "Fatorial de " + numero + " é: " + resultado;
}
// esperando aprovação do colaborador Carlos Araki
