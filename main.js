//var book = [];
//console.log(book)
onload = (() => {
    fetch('https://api.myjson.com/bins/udbm5', {
            method: 'GET'
        })
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {

            console.log(data.books[0]);
            renderBooksList(data.books)
//            renderBooksTitle(data.books)
            search(data.books)
            activateEvent(data.books)
        })
})()


function getBooksList(book, searchInput) {
//    console.log(book)
    var newList = [];
    console.log(searchInput);
    if(searchInput == ""){
        newList = book;
    } else {
//        console.log(book)
        book.forEach(oneBook => {
            console.log(oneBook)
            console.log(searchInput)
            if(oneBook.titulo.toUpperCase().includes(searchInput.toUpperCase()) || oneBook.descripcion.toUpperCase().includes(searchInput.toUpperCase())) {
                newList.push(oneBook);
            }
        })
    }

    return newList.map(oneBook => `<div class="book_container d-flex flex-wrap" ontouchstart="this.classList.toggle('hover');"><div class="book_list col-4"><div class="front p-2"><img src='${oneBook.portada}' alt="book_cover" class="w-100 h-100"></div><div class="back"><h3>${oneBook.titulo}</h3><p>${oneBook.descripcion}</p><button type="button" class="btn" onclick="clickMe()" value='${oneBook.detalle}'>More Info</button></div></div></div>`).join("")
}

function renderBooksList (book) {
    document.getElementById("books_list").innerHTML = getBooksList(book, "")
}

//function getBooksTitle (book, searchInput) {
//    
//    return book.map(oneBook => `<h3>${oneBook.titulo}</h3><p>${oneBook.descripcion}</p>`).join("")
//}
//
//function renderBooksTitle (book) {
//   
//    document.getElementById("books_title").innerHTML = getBooksTitle(book)
//}
//

function search(book) {
    var searchBar = document.getElementById("search_bar").value
    
    document.getElementById("books_list").innerHTML = getBooksList(book, searchBar) 
}

function clickMe () {
    
    console.log("hi")
}

function activateEvent (book) {
     document.querySelector("#search_bar").addEventListener("keyup", () => search(book));
}

