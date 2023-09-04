import { useState } from 'react';
import booksJSON from '../../data/books.json';
import BookItem from './BookItem';

const SORT_BY_OPTIONS = ['Title', 'Rating'];

const INITIAL_BOOKS = booksJSON.splice(0, 2);

const BooksList = () => {
  const [books, setBooks] = useState(INITIAL_BOOKS);
  const [sortBy, setSortBy] = useState(null);

  const renderBookItems = () => {
    let booksCopy = [...books];

    if (SORT_BY_OPTIONS.includes(sortBy)) {
      if (sortBy === 'Title') {
        booksCopy = booksCopy.sort((a, b) => {
          const titleA = a.title.toLowerCase(); // Convert titles to lowercase for case-insensitive sorting
          const titleB = b.title.toLowerCase();
      
          if (titleA < titleB) {
            return -1; // a should come before b in the sorted order
          }
          if (titleA > titleB) {
            return 1; // a should come after b in the sorted order
          }
          return 0; // titles are equal
        });
      }
      if (sortBy === 'Rating') {
        booksCopy = booksCopy.sort((a, b) => b.rating - a.rating);
      }
    }

    return booksCopy.map(book => (
      <BookItem key={book.id} {...book} onDelete={() => onDeleteBook(book.id)} />
    ))
  }

  const handleSortByButton = (value) => {
    if (sortBy === value) {
      setSortBy(null)
    } else {
      setSortBy(value)
    }
  }

  const onDeleteBook = (id) => {
    const newBooks = books.filter((book) => book.id !== id);
    setBooks(newBooks);
  };

  const addRandomBook = () => {
    if (booksJSON.length === 0) {
      return alert('There are no more books');
    }

    const randomIndex = Math.floor(Math.random() * booksJSON.length);
    const newBook = booksJSON.splice(randomIndex, 1)[0]; // splice devuelve un arr con lo que borra, así que me quedo con el índice 1
    setBooks([...books, newBook])
  }

  return (
    <div className="BooksList">
      { books.length > 0
        ? (
          <>
            <div className="flex">
              <div className="btn-group me-3" role="group" aria-label="Basic example">
                {SORT_BY_OPTIONS.map((option, i) => (
                  <button
                    key={i} type="button"
                    className={`btn btn-primary ${sortBy === option ? 'active' : ''}`}
                    onClick={() => handleSortByButton(option)}
                  >
                    {option}
                  </button>
                ))}
              </div>

              <button className="btn btn-primary" onClick={addRandomBook}>
                Add random book
              </button>
            </div>

            <table className="table table-hover mt-3">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Title</th>
                  <th scope="col">Rating</th>
                  <th scope="col">Awarded</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {renderBookItems()}
              </tbody>
            </table>
          </>
        ) : (
          <p>There are no books to display</p>
        )
      }

    </div>
  )
}

export default BooksList;