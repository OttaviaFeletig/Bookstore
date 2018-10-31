
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

    return newList.map(oneBook => 
       `<div class="book_container" ontouchstart="this.classList.toggle('hover');">
            <div class="book_list d-flex align-items-center justify-content-start">        <div class="front p-2">
                    <img class="cover" src='${oneBook.portada}' alt="book_cover">
                </div>
                <div class="back">
                    <h3>${oneBook.titulo}</h3>
                    <p>${oneBook.descripcion}</p>
                    <button type="button" class="btn" name="more_info"  value='${oneBook.detalle}' data-toggle="modal" data-target="#modalBooks">More Info</button>
                </div>
            </div>
        </div>`
    ).join("")
}

function renderBooksList (book) {
    document.getElementById("books_list").innerHTML = getBooksList(book, "")
}


function search(book) {
    var searchBar = document.getElementById("search_bar").value
    
    document.getElementById("books_list").innerHTML = getBooksList(book, searchBar) 
}

function activateEvent (book) {
    document.querySelector("#search_bar").addEventListener("keyup", () => search(book));
    
    Array.from(document.getElementsByClassName("btn")).forEach(btn => btn.addEventListener("click", (event) => getDetalle(event)))
    
}


function getDetalle (event) {
    console.log(event)
    if(!Array.isArray(event)){
        console.log(event.target.value)
        var img = document.createElement("img")
        img.setAttribute("src", event.target.value)
        document.querySelector("#detalle").innerHTML = ""
        document.querySelector("#detalle").append(img)
    }   
}


