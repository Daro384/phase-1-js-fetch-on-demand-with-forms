const init = () => {
  const inputForm = document.querySelector("form")
  inputForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const input = document.getElementById("searchByID").value
    if (["1","2","3"].includes(input)){
        fetch(`http://localhost:3000/movies/${input}`)
        .then(resp => resp.json())
        .then(data => {
            document.querySelector("h4").textContent = data.title
            document.querySelector("p").textContent = data.summary
        })
    } else {
        document.querySelector("h4").textContent = "404 Error"
        document.querySelector("p").textContent = "Movie not found"
    }

    })
}

document.addEventListener('DOMContentLoaded', init);