let input = document.getElementById('input')
const display = document.getElementById('lista-tarefas')
const button = document.getElementById('button')

function inserirTarefa(){
    let tarefa = input.value

    if(tarefa ==''){
        alert('Por Favor, insira uma tarefa')
        return
    }
    display.innerHTML += 
    `<div class= "tarefa">
        ${tarefa} 
        <div class="buttons">
            <button class= "delete">Apagar</button>
            <button class= "edit">Editar</button>
            </div>
        </div>`

    input.value = ''

}

function deletarTarefa(event){
    if(event.target.classList.contains("delete")){
        event.target.parentElement.parentElement.remove()
    }

    if(event.target.classList.contains("edit")){
        let novaTarefa = prompt ("Edite a Tarefa")
        event.target.parentElement.parentElement.innerHTML = `${novaTarefa}
        <div class="buttons">
            <button class="delete">Apagar</button>
            <button class="edit">Editar</button>
            </div>`

    }

}

button.addEventListener("click", inserirTarefa)
display.addEventListener("click", deletarTarefa)