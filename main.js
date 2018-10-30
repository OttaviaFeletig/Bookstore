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
        getDetalle(data.books)
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

    return newList.map(oneBook => `<div class="book_container d-flex flex-wrap" ontouchstart="this.classList.toggle('hover');"><div class="book_list col-4"><div class="front p-2"><img src='${oneBook.portada}' alt="book_cover" class="w-100 h-100"></div><div class="back"><h3>${oneBook.titulo}</h3><p>${oneBook.descripcion}</p><button type="button" class="btn" name="more_info"  value='${oneBook.detalle}' data-toggle="modal" data-target="#modalBooks">More Info</button></div></div></div>`).join("")
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

function activateEvent (book) {
    document.querySelector("#search_bar").addEventListener("keyup", () => search(book));
    
    Array.from(document.getElementsByClassName("btn")).forEach(btn => btn.addEventListener("click", (event) => getDetalle(event)))
}

//function clickMe () {
//    document.getElementById("detalle").innerHTML = getDetalle()
//
//    console.log("hi")
//}

function getDetalle (event) {
    console.log(event)
    if(!Array.isArray(event)){
        console.log(event.target.value)
        var img = document.createElement("img")
        img.setAttribute("src", event.target.value)
        document.querySelector("#detalle").innerHTML = ""
        document.querySelector("#detalle").append(img)
    }
    
//    return book.map (oneBook => `<img src="${oneBook.detalle}" alt="book_details"`).join("")
//    
//    renderDetalle(book)
    
    
//            `<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
//            <div class="modal-dialog" role="document">
//                <div class="modal-content">
//                   <div id="detalle">
//                       <img src="${ }" alt="">
//                   </div>
//                </div>
//            </div>
//        </div>`
}

function renderDetalle (book) {
    document.getElementById("detalle").innerHTML = getDetalle(book)
    console.log("Hi")
}

