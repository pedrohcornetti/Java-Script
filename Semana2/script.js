function formatarDataAtual() {
    let dataAtual = new Date();
    let diasDaSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
    let mesesDoAno = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
    let diaSemana = diasDaSemana[dataAtual.getDay()];
    let dia = dataAtual.getDate();
    let mes = mesesDoAno[dataAtual.getMonth()];
    let ano = dataAtual.getFullYear();
    
    let horas = dataAtual.getHours();
    let minutos = dataAtual.getMinutes();
    let segundos = dataAtual.getSeconds();

    let dataFormatada = `${diaSemana}, ${dia} de ${mes} de ${ano} - ${horas}:${minutos}:${segundos}`;
    
    document.getElementById("resultado").innerText = dataFormatada;  // Certifique-se de que o ID seja "resultado"
}


window.onload = formatarDataAtual;


function atualizarRelogio() {
    const agora = new Date();
    const horas = String(agora.getHours()).padStart(2, '0');
    const minutos = String(agora.getMinutes()).padStart(2, '0');
    const segundos = String(agora.getSeconds()).padStart(2, '0');
    document.getElementById('relogio').textContent = `${horas}:${minutos}:${segundos}`;
    
    // Atualiza o relógio a cada segundo
    setTimeout(atualizarRelogio, 1000);
}

function verificarPalindromo() {
    let texto = document.getElementById('texto').value.toLowerCase();
    // Remove espaços e pontuações
    texto = texto.replace(/[^a-z0-9]/g, '');
    const textoInvertido = texto.split('').reverse().join('');
    
    if (texto === textoInvertido) {
        alert('É um palíndromo!');
    } else {
        alert('Não é um palíndromo.');
    }
}