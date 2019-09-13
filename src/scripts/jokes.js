const getJokes = document.querySelector(".joker")


const API = {
    createJokes() {
        return fetch("https://icanhazdadjoke.com/", {
            method: "GET",
            headers: {
                "ACCEPT": "application/json"
            },
        }).then(response => response.json())
            .then(result => getJokes.innerHTML = postJoke(result))

    }
}

const postJoke = (newJoke) => {
    return `
    <div>
    <p>${newJoke.joke}</p>
    </div>
    
    
    `
}

API.createJokes();