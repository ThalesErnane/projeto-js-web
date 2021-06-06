const deletarTarefa = (atualiza, id) => { 
    const index = id
    const tarefasCadastradas = JSON.parse(localStorage.getItem('tarefas')) // converte para obj

    tarefasCadastradas.splice(index, 1) // remove o item selecionado 
    localStorage.setItem('tarefas', JSON.stringify(tarefasCadastradas)) // converte de ojb para json

    atualiza()

}

const BotaoDeleta = (atualiza, id) => { 
    const botaoDeleta = document.createElement('button')
    
    botaoDeleta.classList.add('check-button')
    botaoDeleta.innerText = 'deletar'
    botaoDeleta.addEventListener('click', ()=> deletarTarefa(atualiza, id))

    return botaoDeleta
}



export default BotaoDeleta