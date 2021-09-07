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

// addBookToLibrary function - adds a single book to the myLibrary array and re-renders the books
function addBookToLibrary(book) {
    myLibrary.push(book);
    renderBooks();
}

// createBookElement - generates a book div element from a book object instance
function createBookElement(book) {
    // Determine what the index of book is based on its position in myLibrary
    const index = myLibrary.indexOf(book);
    
    // Create bookElement container div
    const bookElement = document.createElement('div');
    bookElement.classList.add('book-card');

    // Create book title
    const bookTitle = document.createElement('h3');
    bookTitle.textContent = book.title;

    // Create Author card entry
    const authorDiv = document.createElement('div');
    authorDiv.classList.add('card-entry');

    const authorH4 = document.createElement('h4');
    authorH4.textContent = 'Author:';

    const authorP = document.createElement('p');
    authorP.textContent = book.author;

    authorDiv.appendChild(authorH4);
    authorDiv.appendChild(authorP);

    // Create Pages card entry
    const pagesDiv = document.createElement('div');
    pagesDiv.classList.add('card-entry');

    const pagesH4 = document.createElement('h4');
    pagesH4.textContent = 'Pages:';

    const pagesP = document.createElement('p');
    pagesP.textContent = book.pages;

    pagesDiv.appendChild(pagesH4);
    pagesDiv.appendChild(pagesP);

    // Create "read?" card entry
    const readDiv = document.createElement('div');
    readDiv.classList.add('card-entry');

    const readH4 = document.createElement('h4');
    readH4.textContent = 'Read?';

    // Create .book-read div
    const bookReadDiv = document.createElement('div');
    bookReadDiv.classList.add('book-read');

    const yesInput = document.createElement('input');
    yesInput.id = `${index}-yes`;
    yesInput.setAttribute('type', 'radio');
    yesInput.setAttribute('name', `read-${index}`);
    yesInput.setAttribute('value', 'yes');
    // If the book has been read, set this radio button as checked
    if (book.read) yesInput.checked = 'checked';
   
    

    const yesLabel = document.createElement('label');
    yesLabel.setAttribute('for', `${index}-yes`);
    yesLabel.textContent = 'Yes';

    const noInput = document.createElement('input');
    noInput.id = `${index}-no`;
    noInput.setAttribute('type', 'radio');
    noInput.setAttribute('name', `read-${index}`);
    noInput.setAttribute('value', 'no');
    // If the book has not been read, set this radio button as checked
    if (!book.read) noInput.checked = 'checked';


    const noLabel = document.createElement('label');
    noLabel.setAttribute('for', `${index}-no`);
    noLabel.textContent = 'No';

    bookReadDiv.appendChild(yesInput);
    bookReadDiv.appendChild(yesLabel);
    bookReadDiv.appendChild(noInput);
    bookReadDiv.appendChild(noLabel);

    readDiv.appendChild(readH4);
    readDiv.appendChild(bookReadDiv);

    // Create remove book button card entry
    const removeBookDiv = document.createElement('div');
    removeBookDiv.classList.add('card-entry');

    const removeBookBtn = document.createElement('button');
    removeBookBtn.classList.add('remove-book');
    removeBookBtn.textContent = 'Remove';

    removeBookDiv.appendChild(removeBookBtn);

    // Add all created elements to book-card
    bookElement.appendChild(bookTitle);
    bookElement.appendChild(authorDiv);
    bookElement.appendChild(pagesDiv);
    bookElement.appendChild(readDiv);
    bookElement.appendChild(removeBookDiv);

    return bookElement;
}

// renderBooks function - Loops through myLibrary array and adds each book to the DOM
function renderBooks() {
    // Clear any initial books from #book-container
    document.querySelector('#book-container').textContent = '';
    
    const bookContainer = document.querySelector('#book-container');
    myLibrary.forEach(function(book) {
        const bookElement = createBookElement(book);
        bookContainer.appendChild(bookElement);
    });
}

// isValidForm function - checks to ensure new book form inputs are valid
function isValidForm() {

}

/* Event Handler functions */

// createBook function - creates a book based on user form input
function createBook(e) {
    // Prevent default form submission behavior to prevent page reload
    e.preventDefault();

    // Initialize form attribute object
    const formAtr = {};
    
    // Extract form values
    const textInputArr = Array.from(document.querySelectorAll('#new-book-form input[type="text"'));
    textInputArr.forEach(input => {
        formAtr[input.name] = input.value;
    });
    
    const formPages = document.querySelector('#num-pages');
    formAtr.pages = formPages.value;

    const radioInput = document.querySelector('#new-book-form input[type="radio"]:checked');
    formAtr.read = radioInput.value === 'yes';

    // Create book instance
    const book = new Book(formAtr.title, formAtr.author, formAtr.pages, formAtr.read);

    // add the book to the library
    addBookToLibrary(book);

    // Clear all form fields
    document.querySelector('#new-book-form').reset();

    // Hide the form
    document.querySelector('#new-book-form').style.display = 'none';
}

// toggleForm function - toggles the visibility of the new book form
function toggleForm(e) {
    // Toggle the visibility of the new book form and the display text of the new-book-btn
    const newBookForm = document.querySelector('#new-book-form');
    if (e.target.textContent === 'Add New Book') {
        newBookForm.style.display = 'block';
        e.target.textContent = 'Hide New Book Form';
    } else {
        newBookForm.style.display = 'none';
        e.target.textContent = 'Add New Book';
    }
}

/* Add event listeners to page buttons */
const addBookBtn = document.querySelector('#add-book');
addBookBtn.addEventListener('click', createBook);

const addNewBookBtn = document.querySelector('#new-book-btn');
addNewBookBtn.addEventListener('click', toggleForm);

// Initial call of renderBooks function
renderBooks();