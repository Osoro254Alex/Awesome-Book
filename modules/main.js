import BookListApp from './index.js';
import navLinks from './switch.js';
import getDate from './datetime.js';
// instantiate class
const books = new BookListApp();

books.AppendBook();

books.removeButton();

getDate();

navLinks();

document.addEventListener('DOMContentLoaded', books.displayBooks());