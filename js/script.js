var page = 1;
const prevPage = document.getElementById("prev-page")
const nextPage = document.getElementById("next-page")
const characterList = document.getElementById("character-list")

document.body.addEventListener('load', loadCharacters())

prevPage.addEventListener('click', () => {
    if(page > 1){
        page--
    }
    loadCharacters()
})

nextPage.addEventListener('click', () => {
    page++
    loadCharacters()
})



function loadCharacters(){
    fetch('https://rickandmortyapi.com/api/character/?page=' + page)
    .then((response) => {
        if(!response.ok) {
            throw new Error('La solicitud ha fallado')
        }
        return response.json()
    })
    .then((data) => {
        characterList.innerHTML = ""
        var charactersHTML = ""
        for(var character of data.results){
            var newCharacter = ""
            newCharacter += "<li class='character'>"
            newCharacter += "<img src='" + character.image + "' alt=''>"
            newCharacter += "<p><b>Name </b>: " + character.name + "</p>"
            newCharacter += "<p><b>Species </b>: " + character.species + "</p></li>"
            charactersHTML += newCharacter
        }
        characterList.innerHTML = charactersHTML
        console.log(data)
    })
}