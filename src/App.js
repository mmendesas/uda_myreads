import React, { Component } from "react";
import "./App.css";

import Bookshelf from "./components/Bookshelf";
import * as BooksApi from "./BooksApi";

class App extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    BooksApi.getAll().then(books =>
      this.setState(() => ({
        books
      }))
    );
  }

  render() {
    return (
      <div className="App">
        <header className="list-books-title">
          <h1>My Reads</h1>
        </header>
        <div className="list-books-content">
          <Bookshelf title="Currently Reading" books={this.state.books} />
        </div>
      </div>
    );
  }
}

export default App;
