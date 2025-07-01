import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AISuggestions from "../utils//AISuggestions";

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const storedBooks = JSON.parse(localStorage.getItem("books")) || [];
    const selectedBook = storedBooks.find((b) => b.id === Number(id));
    setBook(selectedBook);
  }, [id]);

  if (!book) return <p>Book not found.</p>;

  return (
    <div>
      <h2>{book.title}</h2>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Price:</strong> ₹{book.price}</p>
      <p><strong>Description:</strong> {book.description}</p>
      <p><strong>gener:</strong> {book.gener}</p>
       <AISuggestions gener={book.gener} />
    </div>
  );
};

export default BookDetails;
