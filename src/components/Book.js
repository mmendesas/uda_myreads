import React from "react";

const Book = ({ image, title, author }) => (
  <li className="book">
    <div className="book-top">
      <img src={image} alt={title} height={200} />
      <div className="book-shelf-changer">
        <select>
          <option>Currently Reading</option>
          <option>Want to read</option>
          <option>Read</option>
          <option>None</option>
        </select>
      </div>
    </div>
    <label className="book-title">{title}</label>
    <div className="book-authors">{author}</div>
  </li>
);

export default Book;
