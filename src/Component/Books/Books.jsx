import { useEffect, useState } from "react";

const Books = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("./booksData.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div>
      <h3 className="text-4xl fornt-bold text-center">books</h3>
      <p>{books.length}</p>
    </div>
  );
};

export default Books;
