class Pessoa {
    constructor(nome, sobrenome, email, dataNascimento) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.email = email;
        this.dataNascimento = dataNascimento;
    }

    nomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
    }
}

class Aluno extends Pessoa {
    constructor(nome, sobrenome, email, dataNascimento, curso, matricula) {
        super(nome, sobrenome, email, dataNascimento);
        this.curso = curso;
        this.matricula = matricula;
    }
}

class Professor extends Pessoa {
    constructor(nome, sobrenome, email, dataNascimento, areaAtuacao, matricula) {
        super(nome, sobrenome, email, dataNascimento);
        this.areaAtuacao = areaAtuacao;
        this.matricula = matricula;
    }
}
