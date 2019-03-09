import React from "react";
import PropTypes from 'prop-types';
import noImage from "../img/no-avaiable.png";

class Book extends React.Component {
  state = {
    value: ""
  };

  static propTypes = {
    book: PropTypes.object,
    moveBook: PropTypes.func
  }

  handleChange = event => {
    event.preventDefault();
    this.setState({ value: event.target.value }, () => {
      this.props.moveBook(this.props.book, this.state.value);
    });
  };

  render() {
    const { book } = this.props;
    const { title, authors } = book;
    const hasImage = book.imageLinks && book.imageLinks.thumbnail;
    const imgSrc = hasImage ? book.imageLinks.thumbnail : noImage;

    return (
      <li className="book">
        <div className="book-top">
          <img src={imgSrc} alt={title} height={200} />
          <div className="book-shelf-changer">
            <select value={book.shelf} onChange={this.handleChange}>
              <option value="none">None</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to read</option>
              <option value="read">Read</option>
            </select>
          </div>
        </div>
        <label className="book-title">{title}</label>
        <div className="book-authors">{
          authors.map((a, i) => <div key={i}>{a}</div>)
        }</div>
      </li>
    );
  }
}

export default Book;
