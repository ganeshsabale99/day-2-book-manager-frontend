import React from "react";
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  return (
    <div>
      <h2>{book.title}</h2>
      <p>{book.author}</p>
      <p>{book.price}</p>
      <p>{book.description}</p>
      <p>{book.gener}</p>
      <Link to={`/book/${book.id}`}>View Details</Link>
    </div>
  );
};

export default BookCard;