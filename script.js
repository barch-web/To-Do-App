let myForm = document.getElementById('myForm')
let myInput = document.getElementById('myInput')
let todos = document.getElementById('myTodo')

myForm.addEventListener('submit', (myEvent) => {
    myEvent.preventDefault()
    newItem(myInput.value)
})

const newItem = (add) => {
    myItem = `<li> ${add} <button onclick='deleteAdd(this)'>Delete</button> </li>`
    todos.insertAdjacentHTML('beforeend', myItem) 
    myInput.value = ''
    myInput.focus()
}

const deleteAdd = (itemDelete) => {
    itemDelete.parentElement.remove()
}


