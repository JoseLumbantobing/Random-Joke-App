const jokes = document.querySelector('.joke');
const button = document.querySelector('.btn');

const displayJokes = {
    updateJoke: function() {
        fetch('https://v2.jokeapi.dev/joke/Any?blacklistFlags=religious,racist,sexist&type=single')
            .then(response => response.json())
            .then(data => {
                jokes.innerText = (data.joke);
            });
    }
}

button.addEventListener('click', function() {
    displayJokes.updateJoke();
});