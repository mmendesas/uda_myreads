import React from "react";
import Book from "./Book";

const BookList = ({ books }) => (
  <ul className="books-grid">
    {books.map(book => {
      const { id, authors, title, imageLinks } = book;
      return (
        <Book
          key={id}
          image={imageLinks.thumbnail}
          title={title}
          author={authors[0]}
        />
      );
    })}
  </ul>
);

export default BookList;
