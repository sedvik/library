// myLibrary - an array containing book objects
const myLibrary = [
    {
        title: "The Hobbit",
        author: "J.R.R Tolkien",
        pages: 304,
        read: true
    },
    {
        title: "The Name of the Wind",
        author: "Patrick Rothfuss",
        pages: 662,
        read: true
    },
    {
        title: "The Shining",
        author: "Stephen King",
        pages: 659,
        read: false
    }
];

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

// createBookElement - generates a book div element from a book object instance
function createBookElement(book) {
    const bookElement = document.createElement('div');

}

// renderBooks function - Loops through myLibrary array and adds each book to the DOM
function renderBooks() {
    const bookContainer = document.querySelector('#book-container');
    myLibrary.forEach(function(book) {
        const bookElement = createBookElement(book);
        bookContainer.appendChild(bookElement);
    });
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
