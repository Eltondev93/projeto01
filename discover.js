function toggleMode(){
    const body = document.body
    body.classList.toggle('luz')    

// pegar tag img 
const img = document.querySelector('#profile img')

// substituir a imagem
if(body.classList.contains('luz')){

// se tiver ligth mode, adicionar a imagem ligth{
    img.setAttribute('src', './IMG/escuro.jpg')
}else {
// se tiver  sem light mode, manter a imagem normal
    img.setAttribute('src', './IMG/DIA.jpg')
}
}