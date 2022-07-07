console.log("hi")
function addMovie(event) {
    event.preventDefault()
    let inputField = document.querySelector('input')
    
    const movie = document.createElement('li');
    const movieTitle = document.createElement('span');
    movieTitle.textContent = inputField.value;
    movie.appendChild(movieTitle)

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'x'
    deleteBtn.addEventListener('click',deleteMovie)
    movie.appendChild(deleteBtn)

    const list = document.querySelector("ul");
    list.appendChild(movie);
    inputField.value = ""
}
document.querySelector('form').addEventListener('submit',addMovie);

function deleteMovie (event) {
    event.target.parentNode.remove();
}

function crossOffMovie(event) {
    event.target.classList.toggle('checked')
    
}
