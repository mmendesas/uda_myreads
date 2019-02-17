import React from "react";
import BookList from "./BookList";

const Bookshelf = ({ title, books }) => (
  <div className="bookshelf">
    <h1 className="bookshelf-title">{title}</h1>
    <div className="bookshelf-books">
      <BookList books={books} />
    </div>
  </div>
);

export default Bookshelf;
