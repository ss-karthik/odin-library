const myLibrary = [];

function Book(title, author, pageCount, status) {
	this.id = myLibrary.length;
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.status = status;
    this.changeStatus = function() {
        if (status == 1) {
        	status = 0;
        } else {
        	status = 1;
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
		
		title.innerHTML = item.title;
		author.innerHTML = 'By: ' + item.author;
		pcount.innerHTML = item.pageCount + ' pages';
		changeStatus.innerHTML = 'Change Read Status';
		changeStatus.addEventListener('click', item.changeStatus());
		if (status == 1) {
			status.innerHTML = 'Book has been read';
		} else {
			status.innerHTML = 'Book has not been read';
		}
		
		container.appendChild(title);
		container.appendChild(author);
		container.appendChild(pcount);
		container.appendChild(status);
		container.appendChild(changeStatus);
		cards.appendChild(container);
	});
}

function addBook() {
	
}
