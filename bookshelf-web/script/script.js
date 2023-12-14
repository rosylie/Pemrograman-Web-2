const books = [];

const RENDER_BOOKS = "render-books";
const STORAGE_KEY = "books";

function isStorageExist() {
    if(typeof Storage === undefined) {
        alert("browser not support local storage");
        return false;
    }
    return true;
}

const findIndexBook = (id) => {
    for(const index in books) {
        if(books[index].id == id) {
            return index;
        }
    }
    return -1;
}

const findBook = (id) => {
    const bookFinded = books.find((item) => item.id == id);
    return bookFinded
};

function removeBook(id){
    // const deletedBook = books.find((item) => item.id == id );
    const deletedBook = findIndexBook(id);

    if(!deletedBook === -1) return;
    books.splice(deletedBook, 1);

    document.dispatchEvent(new Event(RENDER_BOOKS));
    saveData();
}

function switchStatusBook(id) {
    const book = findBook(id);

    book.isComplete = !book.isComplete;
    document.dispatchEvent(new Event(RENDER_BOOKS));
    saveData();
}

const saveData = () => {

    if(isStorageExist()) {
        localStorage.removeItem(STORAGE_KEY);
        // const modifiedBooks = books.map(book =>
        //     generateBookObject(book.id, book.title, book.author, book.year, book.isComplete)
        // );
        const modifiedBooks = books.map(book => {
            return {
                id: book.id,
                title: book.title,
                author: book.author,
                year: book.year,
                isComplete: book.isComplete,
            };
        });

        
        const dataParsed = JSON.stringify(modifiedBooks);
        localStorage.setItem(STORAGE_KEY, dataParsed);
        document.dispatchEvent(new Event(RENDER_BOOKS));
    }
}

function loadDataFromStorage() {
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY));

    if ( data !== null) {
        for (const book of data) {
            books.push(book);
        }
    }

    document.dispatchEvent(new Event(RENDER_BOOKS));
}

function generateId(){
    return +new Date();
}

function generateBookObject(id, title, author, year, isComplete) {
    // Mengonversi nilai year menjadi integer
    const yearInteger = parseInt(year);
    const bookObject = {
        id, 
        title, 
        author, 
        year: yearInteger, 
        isComplete
    };
    return bookObject;
}

function addBook() {
    const title = document.getElementById("book-title").value;
    const year = document.getElementById("book-year").value;
    const author = document.getElementById("book-author").value;
    const isComplete = document.getElementById("book-done-type").checked;
    const id = generateId();

    const book = generateBookObject(id, title, author, year, isComplete);
    books.push(book);
    document.dispatchEvent(new Event(RENDER_BOOKS));
    saveData();
}

function makeBook(book) {
    const title = document.createElement("h3");
    title.innerText = book.title;

    const author = document.createElement("p");
    author.innerText = book.author;

    const bookHead = document.createElement("p");
    bookHead.classList.add("book-head");
    bookHead.append(title, author);

    const sectionYear = document.createElement('h5');
    sectionYear.innerText = "Tahun Penerbit";

    const bookYear = document.createElement('p');
    bookYear.innerText = book.year;


    const bookYearContainer = document.createElement('div');
    bookYearContainer.classList.add('book-year');
    bookYearContainer.append(sectionYear, bookYear);

    const icTrash = document.createElement("img");
    icTrash.setAttribute("src", "./assets/trash.png")

    const icTrashDiv = document.createElement("div");
    icTrashDiv.classList.add("icon-trash");
    icTrashDiv.append(icTrash);
    icTrashDiv.addEventListener("click", function() {
        // console.log("book id = ", book.id);
        const userConfirmed = confirm("Are you sure to delete this book?");
        if (userConfirmed) {
            removeBook(book.id);
            location.reload();
        }
    });

    const icCheck = document.createElement("img");
    icCheck.setAttribute("src", "./assets/check.png");

    const icCheckDiv = document.createElement("div");
    icCheckDiv.classList.add("icon-check");
    icCheckDiv.append(icCheck);
    icCheckDiv.addEventListener("click", function() {
        // console.log("book status => ", book.isComplete);
        switchStatusBook(book.id);
    });

    const bookActionDiv = document.createElement("div");
    bookActionDiv.classList.add("book-action");
    bookActionDiv.append(icTrashDiv, icCheckDiv);

    const cardBook = document.createElement("div");
    cardBook.classList.add("card-book");
    cardBook.append(bookHead, bookYearContainer, bookActionDiv);
    cardBook.setAttribute("id", `book-${book.id}`);

    return cardBook;
}

document.addEventListener("DOMContentLoaded", function(){
    const submitForm = document.getElementById("form-add");
    submitForm.addEventListener("submit", function(e) {
        e.preventDefault();
        addBook();
    });

    if(isStorageExist()) {
        loadDataFromStorage();
    }

});

document.addEventListener(RENDER_BOOKS, function() {
    const unreadBooks = document.getElementById("unread-book");
    const readBooks = document.getElementById("read-book");

    unreadBooks.innerHTML = "<h2>Unread Book</h2>";
    readBooks.innerHTML = "<h2>Finished Book</h2>";

    books.map((item) => {
        const book = makeBook(item);

        if(!item.isComplete) {
            unreadBooks.append(book);
        } else {
            readBooks.append(book);
        }
    });
});

const clearBooksButton = document.getElementById("button-delete");
function clearBooks(e){
    localStorage.clear();
    location.reload();
}

clearBooksButton.addEventListener("click", function(e){
    const userConfirmed = confirm("Are you sure to delete all the books?");
    if (userConfirmed) {
        clearBooks();
}}
);

const searchBar = document.getElementById("search-bar-form");

searchBar.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents the default form submission behavior

    const searchTerm = document.getElementById("search-bar-input").value.toLowerCase();
    
    // Filter unread books
    const unreadBooks = document.getElementById("unread-book");
    filterBooks(unreadBooks, searchTerm);

    // Filter read books
    const readBooks = document.getElementById("read-book");
    filterBooks(readBooks, searchTerm);
});

function filterBooks(container, searchTerm) {
    const books = container.getElementsByClassName("card-book");

    Array.from(books).forEach(book => {
        const title = book.querySelector(".book-head h3").innerText.toLowerCase();
        const year = book.querySelector(".book-year p").innerText.toLowerCase();

        if (title.includes(searchTerm) || year.includes(searchTerm)) {
            book.style.display = "block"; // Show the book
        } else {
            book.style.display = "none"; // Hide the book
        }
    });
}
