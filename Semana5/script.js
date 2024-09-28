class Tarefa {
    constructor(nome, descricao) {
        this.nome = nome;
        this.descricao = descricao;
        this.status = 'pendente';
        this.mostrarDetalhes = false; // Novo atributo para controlar a exibição dos detalhes
    }

    concluir() {
        this.status = 'concluida';
    }

    detalhes() {
        return `Nome: ${this.nome}, Status: ${this.status}`;
    }
}

class GerenciadorDeTarefas {
    constructor() {
        this._tarefas = [];
        this._listaTarefas = document.getElementById('listaTarefas');
        this._form = document.getElementById('formTarefa');
        this._nomeInput = document.getElementById('nomeTarefa');
        this._descricaoInput = document.getElementById('descricaoTarefa');

        this._adicionarEventos();
    }

    _adicionarEventos() {
        this._form.addEventListener('submit', (event) => this._aoSubmeterFormulario(event));
    }

    _aoSubmeterFormulario(event) {
        event.preventDefault();
        const nome = this._nomeInput.value.trim();
        const descricao = this._descricaoInput.value.trim();
        if (nome && descricao) {
            const tarefa = new Tarefa(nome, descricao);
            this.adicionarTarefa(tarefa);
            this._form.reset();
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    }

    adicionarTarefa(tarefa) {
        this._tarefas.push(tarefa);
        this._renderizarTarefas();
    }

    _renderizarTarefas() {
        this._listaTarefas.innerHTML = '';
        this._tarefas.forEach((tarefa, index) => {
            const tarefaDiv = document.createElement('div');
            tarefaDiv.classList.add('tarefa');
            if (tarefa.status === 'concluida') {
                tarefaDiv.classList.add('concluida');
            }

            const detalhesP = document.createElement('p');
            detalhesP.textContent = tarefa.detalhes();

            // Elemento para a descrição, inicialmente oculto
            const descricaoP = document.createElement('p');
            descricaoP.textContent = `Descrição: ${tarefa.descricao}`;
            descricaoP.classList.add('descricao');
            if (!tarefa.mostrarDetalhes) {
                descricaoP.style.display = 'none';
            }

            const actionsDiv = document.createElement('div');

            const detalhesBtn = document.createElement('button');
            detalhesBtn.textContent = 'Detalhes';
            detalhesBtn.classList.add('detalhes');
            detalhesBtn.addEventListener('click', () => this.visualizarDetalhes(index, descricaoP));

            const concluirBtn = document.createElement('button');
            concluirBtn.textContent = 'Concluir';
            concluirBtn.classList.add('concluir');
            concluirBtn.addEventListener('click', () => this.marcarComoConcluida(index));

            const removerBtn = document.createElement('button');
            removerBtn.textContent = 'Remover';
            removerBtn.classList.add('remover');
            removerBtn.addEventListener('click', () => this.removerTarefa(index));

            actionsDiv.appendChild(detalhesBtn);
            actionsDiv.appendChild(concluirBtn);
            actionsDiv.appendChild(removerBtn);

            tarefaDiv.appendChild(detalhesP);
            tarefaDiv.appendChild(descricaoP);
            tarefaDiv.appendChild(actionsDiv);

            this._listaTarefas.appendChild(tarefaDiv);
        });
    }

    visualizarDetalhes(index, descricaoElemento) {
        const tarefa = this._tarefas[index];
        tarefa.mostrarDetalhes = !tarefa.mostrarDetalhes;
        if (tarefa.mostrarDetalhes) {
            descricaoElemento.style.display = 'block';
        } else {
            descricaoElemento.style.display = 'none';
        }
    }

    marcarComoConcluida(index) {
        this._tarefas[index].concluir();
        this._renderizarTarefas();
    }

    removerTarefa(index) {
        this._tarefas.splice(index, 1);
        this._renderizarTarefas();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new GerenciadorDeTarefas();
});
