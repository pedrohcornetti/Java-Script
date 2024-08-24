function exercicio1() {
    let numero = parseInt(prompt("Digite um número inteiro positivo:", ""));
    if (!isNaN(numero) && numero >= 0) {
        if (numero % 2 === 0) {
            alert("O número é par.");
        } else {
            alert("O número é ímpar.");
        }
    } else {
        alert("Por favor, digite um número inteiro positivo válido.");
    }
}

function exercicio2() {
    let numero = parseInt(prompt("Digite um número inteiro positivo:", ""));
    let ehPrimo = true;
    if (!isNaN(numero) && numero > 1) {
        for (let i = 2; i <= Math.sqrt(numero); i++) {
            if (numero % i === 0) {
                ehPrimo = false;
                break;
            }
        }
        if (ehPrimo) {
            alert("O número é primo.");
        } else {
            alert("O número não é primo.");
        }
    } else {
        alert("Por favor, digite um número inteiro positivo maior que 1.");
    }
}

function exercicio3() {
    let numero = parseInt(prompt("Digite um número inteiro positivo:", ""));
    if (!isNaN(numero) && numero >= 0) {
        let fatorial = 1;
        for (let i = 1; i <= numero; i++) {
            fatorial *= i;
        }
        alert("O fatorial de " + numero + " é: " + fatorial);
    } else {
        alert("Por favor, digite um número inteiro positivo válido.");
    }
}

function exercicio4() {
    let dado = prompt("Digite um dado:");
    let confirmar = confirm("Deseja verificar o tipo do dado informado?");
    if (confirmar) {
        let tipo;
        let numeroConvertido = parseFloat(dado);
        if (!isNaN(numeroConvertido)) {
            tipo = "número";
        } else {
            tipo = "string";
        }
        document.getElementById("resultado").innerText = "O tipo do dado informado é: " + tipo;
    } else {
        document.getElementById("resultado").innerText = "Obrigado por visitar esta página.";
    }
}

