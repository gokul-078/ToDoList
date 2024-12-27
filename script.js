
let wrapper = document.getElementById("wrapper")
let input = document.getElementById("input")
let buttonadd = document.getElementById("add")
let todolist = document.getElementById("todoList")

// pushing the entering list to an array..
// let todos = []

// (optional) below one is same as belower one..
/* buttonadd.addEventListener("click",() => {
    let para = document.createElement('p')
    para.innerText = input.value
    todolist.appendChild(para)
    input.value = ''
}) */

// pushing the entering list to an array..
let todos = []

// window loading procedures to prevent from refresh...
window.onload = () =>  {
    todos = JSON.parse(localStorage.getItem('todoName')) || []
    todos.forEach(todo1 => todo(todo1))
}

buttonadd.addEventListener("click",() => {
    if(input.value === '')
    {
        alert("Enter a task first!")
    }
    else
    {
        todos.push(input.value)
        localStorage.setItem('todoName',JSON.stringify(todos))  // This line is used to store the values inside the todos[array] in local storage in console..
        todo(input.value)
        input.value = ''
    }
})

function todo(todo12) {
    let para = document.createElement("p")
    para.style.color = "#ffeba7"
    para.innerText = todo12
    todolist.appendChild(para)
    para.addEventListener("click", () => {
        para.style.textDecoration = "line-through"
        remove12(todo12)
    })
    para.addEventListener("dblclick", () => {
        todolist.removeChild(para)  // (or) para.remove()
        remove12(todo12)
    })
}

function remove12(todo123)
{
    let index1 = todos.indexOf(todo123)
    if(index1 > -1)
    {
        todos.splice(index1,1)
    }
    localStorage.setItem('todoName',JSON.stringify(todos))
}

