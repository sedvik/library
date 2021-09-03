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

// createBook function - creates a book based on user form input
function createBook(e) {
    // Prevent default form submission behavior
    e.preventDefault();
    
    // Extract form values

    // Create book instance
    const book = {};

    // add the book to the library
    addBookToLibrary(book);

    // Clear all form fields

    // Hide the form
}

/* Add event listeners to page buttons */
