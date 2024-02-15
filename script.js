function Book(title, author, pageCount, status) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.status = status;
    this.info = function() {
        return title + ", by " + author + ", " + pageCount + " pages, " + status; 
    }
}