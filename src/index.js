
const breedUrl = 'https://dog.ceo/api/breeds/list/all' 

function fetchImages(){
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4" 
    fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => addImages(json))
}

function addImages(json){
    const imagesContainer = document.getElementById('dog-image-container')
    const imgArray = json.message
    imgArray.forEach(function(element){
        let img = document.createElement('img')
        img.src = element
        // debugger
        imagesContainer.innerHTML += img
    })
}

function fetchBreeds(){
    fetch(breedUrl)
    .then(resp => resp.json())
    .then(json => addBreeds(json))
}

function addBreeds(json){
    const breedList = document.getElementById('dog-breeds')
    console.log(json.message)
}

document.addEventListener("DOMContentLoaded", fetchImages())
document.addEventListener("DOMContentLoaded", fetchBreeds())