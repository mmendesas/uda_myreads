import React, { Component } from "react";
import "./App.css";

import Bookshelf from "./components/Bookshelf";
import * as BooksApi from "./BooksApi";

class App extends Component {
  state = {
    reading: [],
    wantToRead: [],
    read: []
  };

  componentDidMount() {
    BooksApi.getAll().then(books => {
      const reading = books.filter(b => b.shelf === "currentlyReading");
      const read = books.filter(b => b.shelf === "read");
      const wantToRead = books.filter(b => b.shelf === "wantToRead");

      this.setState(() => ({
        wantToRead,
        read,
        reading
      }));
    });
  }

  render() {
    return (
      <div className="App">
        <header className="list-books-title">
          <h1>My Reads</h1>
        </header>
        <div className="list-books-content">
          <Bookshelf title="Currently Reading" books={this.state.reading} />
          <Bookshelf title="Want to Read" books={this.state.wantToRead} />
          <Bookshelf title="Read" books={this.state.read} />
        </div>
      </div>
    );
  }
}

export default App;
