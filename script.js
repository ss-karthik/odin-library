
const myLibrary = [];

function Book(title, author, pageCount, status) {
	this.id = myLibrary.length;
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.status = status;
    this.changeStatus = function() {
        if (this.status == 1) {
        	this.status = 0;
        } else {
        	this.status = 1;
        }
    }
}


function displayBooks() {
	let cards = document.querySelector('.card-container');
	cards.innerHTML = "";
	myLibrary.forEach((item) => {
		let container = document.createElement('div');
		container.classList.add('card');
		container.id = item.id;
		let title = document.createElement('h1');
		let author = document.createElement('h2');
		let pcount = document.createElement('h2');
		let status = document.createElement('h2');
		let changeStatus = document.createElement('button');
		let delBook = document.createElement('button');	
		title.innerHTML = item.title;
		author.innerHTML = 'By: ' + item.author;
		pcount.innerHTML = item.pageCount + ' pages';
		changeStatus.innerHTML = 'Change Read Status';
		delBook.innerHTML = 'Delete Book';
		changeStatus.addEventListener('click', function() {
			item.changeStatus();
			displayBooks();
		});
		delBook.addEventListener('click', function(e) {
			deleteBook(e);
			displayBooks();
		})
		if (item.status == 1) {
			status.innerHTML = 'Book has been read';
		} else {
			status.innerHTML = 'Book has not been read';
		}
		
		container.appendChild(title);
		container.appendChild(author);
		container.appendChild(pcount);
		container.appendChild(status);
		container.appendChild(changeStatus);
		container.appendChild(delBook);
		cards.appendChild(container);
	});
}

const addButton = document.querySelector('.new-book');
const submitButton = document.querySelector('.submit-book');
const dialog = document.querySelector("dialog");

const titleBox = document.getElementById('title');
const authorBox = document.getElementById('author'); 
const pageBox = document.getElementById('pages');
const readBox = document.getElementById('readStatus');

addButton.addEventListener('click', function() {
	dialog.showModal();
});

submitButton.addEventListener('click', function(e) {
	e.preventDefault();
	addBook();
});

function addBook() {
	let status;
	if (readBox.checked == true) {
		status = 1;
	} else {
		status = 0;
	}
	
	let newBook = new Book(titleBox.value, authorBox.value, pageBox.value, status);		
	myLibrary.push(newBook);
	dialog.close();
	displayBooks();

	titleBox.value = '';
	authorBox.value = '';
	pageBox.value = '';
	readBox.checked = false;
}

function deleteBook(e) {
	let id = e.target.parentElement.id;
	myLibrary.splice(id, 1);
}	
