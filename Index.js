console.log("Hello World")
const message = document.querySelector("#message")

const form = document.querySelector("form")


//Functions

function addMovie(event) {
    event.preventDefault()
    let inputField = document.querySelector("input")
    const movie = document.createElement("li")
    const movieTitle = document.createElement("span")
    movieTitle.textContent = inputField.value
    movieTitle.addEventListener("click", crossOffMovie)
    movie.appendChild(movieTitle)
    const deleteBtn = document.createElement("button")
    deleteBtn.textContent = 'x'
    movie.appendChild(deleteBtn)
    const ul = document.querySelector('ul')
    ul.appendChild(movie)
    inputField.value = ""
    deleteBtn.addEventListener("click", deleteMovie)
}

function deleteMovie(event){
    event.target.parentNode.remove()
    message.textContent = "Movie Deleted"
}

function crossOffMovie(event){
    event.target.classList.toggle('checked')
    if(event.target.classList.contains("checked")){
    message.textContent = "Watched"
}else{
    message.textContent = " Movie added back"
}

}

form.addEventListener("submit", addMovie)
// button.addEventListener("click", deleteMovie)