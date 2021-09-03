// myLibrary - an array containing book objects
const myLibrary = [];

// Book constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

// addBookToLibrary function - adds a single book to the myLibrary array
function addBookToLibrary(book) {
    myLibrary.push(book);
}

/* Event Handler functions */

// createBook function - creates a book based on user input
function createBook(e) {

}

/* Add event listeners to page buttons */
