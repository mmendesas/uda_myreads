import React from "react";
import PropTypes from 'prop-types';
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

Bookshelf.propTypes = {
  title: PropTypes.string,
  books: PropTypes.arrayOf(Object),
  moveBook: PropTypes.func
}

export default Bookshelf;
