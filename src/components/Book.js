import React from "react";

class Book extends React.Component {
  state = {
    value: ""
  };

  handleChange = event => {
    event.preventDefault();
    this.setState({ value: event.target.value }, () => {
      this.props.moveBook(this.props.book, this.state.value);
    });
  };

  render() {
    const {
      imageLinks: { thumbnail },
      title,
      authors
    } = this.props.book;

    return (
      <li className="book">
        <div className="book-top">
          <img src={thumbnail} alt={title} height={200} />
          <div className="book-shelf-changer">
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="none">None</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to read</option>
              <option value="read">Read</option>
            </select>
          </div>
        </div>
        <label className="book-title">{title}</label>
        <div className="book-authors">{authors}</div>
      </li>
    );
  }
}

export default Book;
