import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const BookForm = ({ onCreateBook }) => {
  const [values, setValues] = useState({
    title: '',
    rating: 5,
    awarded: false
  });

  const onSubmit = (event) => {
    event.preventDefault();

    onCreateBook({
      ...values,
      id: uuidv4(),
    })
  }

  const onChange = (event) => {
    const { value, name, type, checked } = event.target;

    setValues({
      ...values,
      [name]: type === 'checkbox' ? checked : value
    })
  }

  return (
    <div className="BookForm mb-4">
      <h2>Add a new book</h2>

      <form onSubmit={onSubmit}>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">Title</label>
        <input
          className="form-control"
          id="title"
          name="title"
          placeholder="Title of the book"
          value={values.title}
          onChange={onChange}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="rating" className="form-label">Rating</label>
        <input
          type="number"
          min={0}
          max={10}
          className="form-control"
          id="rating"
          name="rating"
          placeholder="Rating of the book"
          value={values.rating}
          onChange={onChange}
        />
      </div>

      <div className="form-check mb-3">
        <input
          className="form-check-input"
          type="checkbox"
          id="awarded"
          name="awarded"
          checked={values.awarded}
          onChange={onChange}
        />
        <label htmlFor="awarded" className="form-check-label">Does the book have any award</label>
      </div>

      <button className="btn btn-primary btn-sm">
        Submit
      </button>

      </form>
    </div>
  )
}

export default BookForm;