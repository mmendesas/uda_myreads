import React from "react";

const Bookshelf = ({ title, books }) => (
  <div className="bookshelf">
    <h2>{title}</h2>
    <hr />
    <ul>
      {books.map(i => (
        <li key={i.id}>{i.title}</li>
      ))}
    </ul>
  </div>
);

export default Bookshelf;
