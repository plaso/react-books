const BookItem = ({ title, rating, awarded, onDelete, number }) => {
  const isAwarded = () => {
    if (awarded === true) {
      return 'Yes'
    } else if (awarded === false) {
      return 'No'
    }
    return 'No data'
  }

  return (
    <tr>
      <th scope="row">{number}</th>
      <td>{title}</td>
      <td>{rating}</td>
      <td>{isAwarded()}</td>
      <td>
        <button className="btn btn-danger" onClick={onDelete}>
          Delete
        </button>
      </td>
    </tr>
  )
}

export default BookItem;
