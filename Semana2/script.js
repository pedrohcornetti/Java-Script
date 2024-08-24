function formatarDataAtual() {
    let dataAtual = new Date();
    let diasDaSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
    let mesesDoAno = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
    let diaSemana = diasDaSemana[dataAtual.getDay()];
    let dia = dataAtual.getDate();
    let mes = mesesDoAno[dataAtual.getMonth()];
    let ano = dataAtual.getFullYear();
    
    let dataFormatada = `${diaSemana}, ${dia} de ${mes} de ${ano}`;
    
    document.getElementById("dataAtual").innerText = dataFormatada;
}

window.onload = formatarDataAtual;
