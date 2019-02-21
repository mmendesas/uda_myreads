import React from "react";
import { Link } from "react-router-dom";

import { debounce } from "throttle-debounce";
import * as BooksApi from "../BooksApi";
import Book from "../components/Book";

class Search extends React.Component {
  state = {
    search: "",
    books: []
  };

  constructor(props) {
    super(props);
    this.callSearch = debounce(500, this.onSearch);
  }

  onChange = e => {
    this.setState({ search: e.target.value }, () => {
      this.callSearch();
    });
  };

  onSearch = async () => {
    if (this.state.search.length > 0) {
      let books = await BooksApi.search(this.state.search);
      this.setState({ books });
    }
  };

  updateBook = async (book, to) => {
    await BooksApi.update(book, to);
    this.props.history.push('/')
  };

  componentDidMount = async () => {
    let books = await BooksApi.getAll();
    this.setState({ books });
  };

  render() {
    const { books, search } = this.state;

    return (
      <div>
        <div className="search-books-bar">
          <Link className="close-search" to="/" />
          <form onSubmit={this.onSearch}>
            <input
              type="text"
              value={search}
              onChange={this.onChange}
              placeholder="Search by title or author"
            />
          </form>
        </div>
        <div className="search-books-results">
          <ul className="books-grid">
            {books && books.length > 0 ? (
              books.map(book => (
                <Book key={book.id} book={book} moveBook={this.updateBook} />
              ))
            ) : (
              <p>No results found!</p>
            )}
          </ul>
        </div>
      </div>
    );
  }
}

export default Search;
