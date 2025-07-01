import React, { useEffect, useState } from "react";
import BookCard from "./BookCard";

const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const storedBooks = JSON.parse(localStorage.getItem('books')) || [];
    setBooks(storedBooks);
  }, []);
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">All Books</h2>
      <div className="grid grid-cols-3 gap-4">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Home;
