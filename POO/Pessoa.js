class Pessoa {
    constructor(nome, sobrenome, email, data_nascimento) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.email = email;
        this.data_nascimento = data_nascimento;
    }

    nomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
    }
}

class Aluno extends Pessoa {
    constructor(nome, sobrenome, email, data_nascimento, curso) {
        super(nome, sobrenome, email, data_nascimento);
        this.curso = curso;
    }
}

class Professor extends Pessoa {
    constructor(nome, sobrenome, email, data_nascimento, area_atuacao, link_lattes) {
        super(nome, sobrenome, email, data_nascimento);
        this.area_atuacao = area_atuacao;
        this.link_lattes = link_lattes;
    }
}

const aluno = new Aluno("Pedro", "Silva", "pedro@example.com", "10/09/1996", "Engenharia de Software");
console.log(`Aluno: ${aluno.nomeCompleto()}, Curso: ${aluno.curso}`);

const professor = new Professor("João", "Oliveira", "joao@example.com", "15/04/1980", "Inteligência Artificial", "http://lattes.cnpq.br/joao");
console.log(`Professor: ${professor.nomeCompleto()}, Área de Atuação: ${professor.area_atuacao}, Link Lattes: ${professor.link_lattes}`);
