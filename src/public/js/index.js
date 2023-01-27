const socket = io()

const prodSubmit = document.getElementById("submit")
const input = document.getElementById("title", "price", "img","description")

prodSubmit.addEventListener("click", e=>{
    if(input.value.trim().length > 0){
        socket.emit('message', {message: input.value})
        console.log('click')
    }
})