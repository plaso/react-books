import { useState } from 'react';
import booksJSON from '../../data/books.json';
import BookItem from './BookItem';

const BooksList = () => {
  const [books, setBooks] = useState(booksJSON);

  return (
    <div className="BooksList">
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Rating</th>
            <th scope="col">Awarded</th>
          </tr>
        </thead>
        <tbody>
          {books.map(book => (
            <BookItem key={book.id} {...book} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default BooksList;