import React from "react";
import Book from "./Book";

const Bookshelf = ({ title, books, moveBook }) => (
  <div className="bookshelf">
    <h1 className="bookshelf-title">{title}</h1>
    <div className="bookshelf-books">
      <ul className="books-grid">
        {books.map(book => (
          <Book key={book.id} book={book} moveBook={moveBook} />
        ))}
      </ul>
    </div>
  </div>
);

export default Bookshelf;
