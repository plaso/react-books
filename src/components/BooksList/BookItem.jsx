const BookItem = ({ title, rating, awarded, id }) => {
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
      <th scope="row">{id}</th>
      <td>{title}</td>
      <td>{rating}</td>
      <td>{isAwarded()}</td>
    </tr>
  )
}

export default BookItem;
