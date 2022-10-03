// BookListApp class: class to hold books
export default class BookListApp {
  constructor() {
    this.bookList = [];
    this.container = document.querySelector('.book-container');
  }

  addBookToList(book) {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>"${book.title}" by ${book.author}</td>
      <td><button class= "remove-btn">Remove</button></td>
      `;
    this.container.append(row);
  }

  // Function to perform the following action:
  /*
1: Add book to the dynamic elements
2: Add book to the array of book
3: Add book to the local storage
*/

  AppendBook() {
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const title = document.querySelector('.title').value;
      const author = document.querySelector('.author').value;
      this.addBookToList({ title, author });
      this.bookList.push({ title, author });
      localStorage.setItem('books', JSON.stringify(this.bookList));
      // Clear form input's values
      document.querySelector('.title').value = '';
      document.querySelector('.author').value = '';
    });
  }

  // Function to perform the following actions:
  /*
  1: Delete book to the dynamic elements
  2: Delete book to the array of book
  3: Delete book to the local storage
  */

  deleteBook() {
    const books = this.bookList;
    books.forEach((book, index) => {
      books.splice(index, 1);
    });
    localStorage.setItem('books', JSON.stringify(books));
  }

  // Function to remove books when 'remove" button clicked
  removeButton() {
    this.container.addEventListener('click', (e) => {
      // delete elements from screen
      if (e.target.classList.contains('remove-btn')) {
        e.target.parentElement.parentElement.remove();
      }
      // remove book from local storage
      this.deleteBook();
    });
  }

  // get book from local storage
  displayBooks() {
    const books = JSON.parse(localStorage.getItem('books'));
    books.forEach((book) => this.addBookToList(book));
  }

  // Function to handle datetime
}
