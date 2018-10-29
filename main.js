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

            console.log(data)
            console.log(data.books[0])
//            book = data.books[0];
            renderBooksList(data.books)
//            renderBooksTitle(data.books)
//            search(data.books)
            //        hooverTitle(data.books)


        })
})()


function getBooksList(book, searchInput) {

    return book.map(oneBook => `<div class="image face col-4 p-3"><img src='${oneBook.portada}' alt="book_cover" class="w-100"><div class="book_title"><h3>${oneBook.titulo}</h3><p>${oneBook.descripcion}</p></div></div>`).join("")
}

function renderBooksList (book) {
    document.getElementById("books_list").innerHTML = getBooksList(book)
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
////
//function search(book) {
//    var searchBar = document.getElementById("search_bar").value
//    console.log(searchBar);
//    document.getElementById("books_title").innerHTML = getBooksTitle(book, searchBar)
//
//}
//function hooverTitle (book) {
//    
//    var elements = document.getElementById("books_title")
//    var title = renderBooksTitle(book)
//    
//    elements.addEventListener("mouseover", function (event) {
//        return event.title;
//    })
//}
