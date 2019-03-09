import React, { Component } from "react";
import { Link } from "react-router-dom";

import Bookshelf from "../components/Bookshelf";
import * as BooksApi from "../BooksApi";

class Main extends Component {
  state = {
    currentlyReading: [],
    wantToRead: [],
    read: []
  };

  load = async () => {
    let books = await BooksApi.getAll();
    this.updateState(books);
  };

  updateState = books => {
    this.setState(() => ({
      currentlyReading: books.filter(b => b.shelf === "currentlyReading"),
      wantToRead: books.filter(b => b.shelf === "wantToRead"),
      read: books.filter(b => b.shelf === "read")
    }));
  }

  updateBook = async (book, to) => {
    const { currentlyReading, wantToRead, read } = this.state;
    let allBooks = [...currentlyReading, ...wantToRead, ...read];

    // update book on api
    await BooksApi.update(book, to);

    // update state with changed book
    let newBooks = allBooks.filter(b => b.id !== book.id);
    newBooks.push({ ...book, shelf: to })
    this.updateState(newBooks);
  };

  componentDidMount() {
    this.load();
  }

  render() {
    return (
      <div className="App">
        <header className="list-books-title">
          <h1>My Reads</h1>
        </header>
        <div className="list-books-content">
          <Bookshelf
            title="Currently Reading"
            books={this.state.currentlyReading}
            moveBook={this.updateBook}
          />
          <Bookshelf
            title="Want to Read"
            books={this.state.wantToRead}
            moveBook={this.updateBook}
          />
          <Bookshelf
            title="Read"
            books={this.state.read}
            moveBook={this.updateBook}
          />
        </div>
        <div className="open-search">
          <Link to="/search">
            <button />
          </Link>
        </div>
      </div>
    );
  }
}

export default Main;
