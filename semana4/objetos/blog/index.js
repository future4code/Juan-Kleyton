let array = []
function PostarBlog() {

event.preventDefault()
let postarTitulo = document.getElementById('titulo-post').value 
let postarAutor = document.getElementById('autor-post').value 
let postarConteudo = document.getElementById('conteudo-post').value

const postarnoBlog = {

    titulo : postarTitulo,
    autor :  postarAutor,
    conteudo : postarConteudo
}

document.getElementById('titulo-post').value=""
document.getElementById('autor-post').value=""
document.getElementById('conteudo-post').value=""

array.push(postarnoBlog);

postar(postarnoBlog)
//console.log(array)
}

function postar(postarnoBlog) {
    document.getElementById('postar').innerHTML += `<h2> ${postarnoBlog.titulo} </h2> <h3> ${postarnoBlog.autor} </h3> <p> ${postarnoBlog.conteudo} </p>` 
}