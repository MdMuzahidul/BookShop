import React from "react";
import { Outlet, useLoaderData, useParams } from "react-router-dom";

const Details = () => {
  const { bookId } = useParams();
  const data = useLoaderData();
  const id = parseInt(bookId);
  const book = data.find((book) => book.bookId === id);
  const { image, author, bookName } = book;
  return (
    <div className="flex gap-4">
      <img src={image} alt={bookName} className="h-[400px]" />
      <div>
        <h3 className="mb-4">{author}</h3>
        <button className="btn mr-4"> make wish</button>
        <button className="btn">add card</button>
      </div>
    </div>
  );
};

export default Details;
