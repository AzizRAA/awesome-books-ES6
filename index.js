import Books from './modules/books.js';
import menuSection from './modules/menu.js';
import { DateTime } from './modules/luxon.js';

menuSection.MenuItems();
const time = document.querySelector('.time');
const currentTime = DateTime.now();
time.innerHTML = `${currentTime.toJSDate()};`;

const formTitle = document.querySelector('#title');
const formAuthor = document.querySelector('#author');
const library = new Books(formTitle, formAuthor);

document.getElementById('form').addEventListener('submit', (e) => {
  e.preventDefault();
  library.addbook();
  Books.reset();
  Books.retrieve();
});

Books.retrieve();
document.querySelectorAll('#delete').forEach((button, id) => {
  button.addEventListener('click', () => {
    Books.dellbooks(id);
    Books.retrieve();
  });
});
