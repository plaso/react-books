import { useState } from 'react';
import booksJSON from '../../data/books.json';
import BookItem from './BookItem';

const BooksList = () => {
  const [books, setBooks] = useState(booksJSON);

  const onDeleteBook = (id) => {
    const newBooks = books.filter((book) => book.id !== id);
    setBooks(newBooks);
  };

  return (
    <div className="BooksList">
      { books.length > 0
        ? (
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Rating</th>
                <th scope="col">Awarded</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {books.map(book => (
                <BookItem key={book.id} {...book} onDelete={() => onDeleteBook(book.id)} />
              ))}
            </tbody>
          </table>
        ) : (
          <p>There are no books to display</p>
        )
      }

    </div>
  )
}

export default BooksList;