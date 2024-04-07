window.sr = ScrollReveal({ reset: true });

sr.reveal('#cabecalho', {duration: 1000});
sr.reveal('#', {duration: 1000});
sr.reveal('#cabecalho', {duration: 1000});

// PROGRAMA

const form = document.querySelector(".form")
const tarefas = document.querySelector(".addTask")
const add = document.querySelector("#botaoAdd")
const listagem = document.querySelector(".listagem")
const armazenamento = [] 

form.addEventListener("submit", function adicionar(event) {
    event.preventDefault()
    if (tarefas.value.length === 0) {
        alert("Escreva alguma para adicionar!")
        return
    }
    const li = document.createElement("li")
    const check = document.createElement("input")
    check.type = "checkbox"
    const btn = document.createElement("button")
    const div = document.createElement("div")


    div.classList.add("div_list")
    li.textContent = tarefas.value
    btn.classList.add("botao_excluir")
    btn.innerText = "🧹"


    listagem.appendChild(li)
    li.appendChild(div)
    div.appendChild(check)
    div.appendChild(btn)
    check.classList.add("checkbox")

    tarefas.value = ""
    tarefas.focus()

    btn.addEventListener("click", () =>  li.remove())


    check.onchange = function() {
        check.checked ? li.classList.add("list_font") : li.classList.remove("list_font");
        }
    })




