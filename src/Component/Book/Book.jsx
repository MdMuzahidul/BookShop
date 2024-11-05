import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { bookId, bookName, author, image } = book;
  return (
    <Link to={`/book/${bookId}`}>
      <div className="card bg-base-100 w-96 shadow-xl p-6">
        <figure className="py-4 bg-[#F3F3F3] rounded-2xl">
          <img src={image} alt={image} className="h-[166px]" />
        </figure>
        <div className="card-body flex-grow">
          <h2 className="card-title">
            {bookName}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>By:{author}</p>
          <div className="card-actions justify-end flex-grow">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
