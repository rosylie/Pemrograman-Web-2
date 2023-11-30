const incompleteBookshelfList = [];
const RENDER_EVENT = 'render-books';

function generatedID() {
    return +new Date();
}

function generateBookObject(id, book, year, isCompleted){
    return {
        id, book, author, year, isCompleted
    }
}

function findBook(bookId) {
    for (const bookItem of books) {
        if(bookItem.id === bookId) {
            return bookItem;
        }
    }
    return null;
}

function findBookIndex(bookId) {
    for (const index in books) {
        if(books[index].id === bookId) {
            return index;
        }
    }
    return -1;
}

function makeBookShelf(bookObject) {
    const {id, book, author, year, isCompleted} = bookObject;

    const textBook = document.createElement('h2');
    textBook.innerText = book;

    const textAuthor = document.createElement('p');
    textAuthor.innerText = author;

    const numberYear = document.createElement('p');
    numberYear.innerText = year;

    const textBookList = document.createElement('div');
    textBookList.classList.add('inner');
    textBookList.append(textBook, textAuthor, numberYear);

    const book_shelf = document.createElement('section');
    book_shelf.classList.add('item', 'shadow')
    book_shelf.append(textBookList);
    book_shelf.setAttribute('id', `books-${id}`);
    
    if(isCompleted) {
        const undoButton = document.createElement('button');
        undoButton.classList.add('undo-button');
        undoButton.addEventListener('click', function() {
            undoBookFromCompleted(id);
        });

        const trashButton = document.createElement('button');
        trashButton.classList.add('trash-button');
        trashButton.addEventListener('click', function() {
            removeBookFromCompleted(id);
        });

        book_shelf.append(undoButton, trashButton);
    } else {
        const checkButton = document.createElement('button');
        checkButton.classList.add('check-button');
        checkButton.addEventListener('click', function() {
            addBooktoCompleted(id);
        });
        book_shelf.append(checkButton);
    }
    return book_shelf;
}


function addBookShelf() {
    const textBook = document.getElementById('inputBookTitle').value;
    const textAuthor = document.getElementById('inputBookAuthor').value;
    const numberYear = document.getElementById('inputBookYear').value;
    const checkDone = document.getElementById('inputBookIsComplete').value;
}