function validarNome() {
    const nome = document.getElementById("nome").value.trim(); // Remover espaços em branco
    const erroNome = document.getElementById("erroNome");
    
    // Expressão regular para validar "Nome Sobrenome" com pelo menos 2 letras em cada parte
    const regex = /^[A-Za-zÀ-ÖØ-öø-ÿ]{2,}(?: [A-Za-zÀ-ÖØ-öø-ÿ]{2,})+$/;
    
    if (!regex.test(nome)) {
        erroNome.textContent = "Nome inválido. Digite no formato 'Nome Sobrenome'.";
        return false;
    }
    
    erroNome.textContent = "";
    return true;
}


function validarEmail() {
    const email = document.getElementById("email").value;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const erroEmail = document.getElementById("erroEmail");
    if (!regex.test(email)) {
        erroEmail.textContent = "Email inválido. Digite no formato 'xxx@xxx.xxx'.";
        return false;
    }
    erroEmail.textContent = "";
    return true;
}

function validarDataNascimento() {
    const data = document.getElementById("dataNascimento").value;
    const erroData = document.getElementById("erroData");
    if (!data) {  // Se o valor for vazio ou inválido
        erroData.textContent = "Data inválida. Por favor, selecione uma data.";
        return false;
    }
    erroData.textContent = "";
    return true;
}


function formatarTelefone(input) {
    const telefone = input.value.replace(/\D/g, '');
    if (telefone.length === 10) {
        input.value = `(${telefone.slice(0, 2)})${telefone.slice(2, 6)}-${telefone.slice(6)}`;
    }
}

function formatarCelular(input) {
    const celular = input.value.replace(/\D/g, '');
    if (celular.length === 11) {
        input.value = `(${celular.slice(0, 2)})${celular.slice(2, 7)}-${celular.slice(7)}`;
    }
}

function validarMatriculaAluno() {
    const matricula = document.getElementById("matriculaAluno").value;
    const erroMatriculaAluno = document.getElementById("erroMatriculaAluno");
    if (matricula.length !== 10) {
        erroMatriculaAluno.textContent = "Matrícula do aluno deve ter 10 dígitos.";
        return false;
    }
    erroMatriculaAluno.textContent = "";
    return true;
}

function validarMatriculaProfessor() {
    const matricula = document.getElementById("matriculaProfessor").value;
    const erroMatriculaProfessor = document.getElementById("erroMatriculaProfessor");
    if (matricula.length !== 5) {
        erroMatriculaProfessor.textContent = "Matrícula do professor deve ter 5 dígitos.";
        return false;
    }
    erroMatriculaProfessor.textContent = "";
    return true;
}

function validarLattesProfessor() {
    const lattes = document.getElementById("lattesProfessor").value;
    const erroLattesProfessor = document.getElementById("erroLattesProfessor");
    const regex = /^(https?:\/\/)?(www\.)?lattes\.cnpq\.br\/[a-zA-Z0-9]+$/; // Regex para validar o link do Lattes
    if (!regex.test(lattes)) {
        erroLattesProfessor.textContent = "URL do Lattes inválida. Insira um link válido.";
        return false;
    }
    erroLattesProfessor.textContent = "";
    return true;
}


function validarFormulario() {
    const validacoes = [validarNome(), validarEmail(), validarDataNascimento()];
    if (document.getElementById("perfil").value === "aluno") {
        validacoes.push(validarMatriculaAluno());
    } else {
        validacoes.push(validarMatriculaProfessor());
    }
    return validacoes.every(Boolean);
}

function mostrarCamposExtras() {
    const perfil = document.querySelector('input[name="perfil"]:checked').value;
    if (perfil === "aluno") {
        document.getElementById("camposAluno").style.display = "block";
        document.getElementById("camposProfessor").style.display = "none";
    } else {
        document.getElementById("camposAluno").style.display = "none";
        document.getElementById("camposProfessor").style.display = "block";
    }
}

