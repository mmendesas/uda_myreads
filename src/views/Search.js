import React from "react";
import { Link } from "react-router-dom";

import { debounce } from "throttle-debounce";
import * as BooksApi from "../BooksApi";
import Book from "../components/Book";

class Search extends React.Component {
  state = {
    search: "",
    books: [],
    homeBooks: []
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
    const { search, homeBooks } = this.state;

    if (search.length > 0) {
      let searchedBooks = await BooksApi.search(search);

      // update shelf for searched books based on home books
      if (!searchedBooks.error) {
        searchedBooks.forEach(book => {
          const idx = homeBooks.findIndex(b => b.id === book.id);
          const sameBook = idx > -1;
          book.shelf = sameBook ? homeBooks[idx].shelf : "none";
        });
      }

      this.setState({ books: searchedBooks });
    } else {
      this.setState({ books: [] })
    }
  };

  updateBook = async (book, to) => {
    await BooksApi.update(book, to);
    this.props.history.push("/");
  };

  componentDidMount = async () => {
    let books = await BooksApi.getAll();
    this.setState({ books, homeBooks: books });
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
