let img = document.querySelector('img');
let button = document.querySelector('.btn-primary');
let h5 = document.querySelector('.card-title')
let cardText = document.querySelector('.card-text');

button.innerText = 'Randomize your dog'
h5.innerText = 'Random Dog'
cardText.innerText = 'Click the button to Generate a random Dog img from the API call'
button.addEventListener('click', function () {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(function (response) {
            return response.json();
        }).then(function (data) {
            img.src = data.message;
        })
})


//part 2
let form = document.querySelector('form');
let textInput = document.querySelector('#textInput');
let alertBox = document.querySelector('#alertBox');

form.addEventListener('submit', (event) =>{
    event.preventDefault();
    let url = `https://goweather.herokuapp.com/weather/${textInput.value}`;
fetch(encodeURI(url))
.then((response) => {
    return response.json();
}).then((data) => {
    console.log(data)
    alertBox.innerText = `${data.description} , ${data.temperature} , ${data.wind}`;
})
})