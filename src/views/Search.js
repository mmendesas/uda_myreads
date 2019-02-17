import React from "react";
import { Link } from "react-router-dom";

import * as BooksApi from "../BooksApi";
import Book from "../components/Book";

class Search extends React.Component {
  state = {
    search: "",
    books: []
  };

  handleChange = e => {
    this.setState({ search: e.target.value });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const books = await BooksApi.search(this.state.search);
    this.setState(() => ({ books }));
  };

  updateBook = async (book, to) => {
    await BooksApi.update(book, to);
  };

  render() {
    const { books, search } = this.state;

    return (
      <div>
        <div className="search-books-bar">
          <Link className="close-search" to="/" />
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              value={search}
              onChange={this.handleChange}
              placeholder="Search by title or author"
            />
          </form>
        </div>
        <div className="search-books-results">
          <ul className="books-grid">
            {books.map(book => (
              <Book key={book.id} book={book} moveBook={this.updateBook} />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Search;
