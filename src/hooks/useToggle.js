import { useState } from 'react';

export default function useToggle(initialValue = true) {
  const [show, setShow] = useState(initialValue);

  const onToggle = () => {
    setShow(prevValue => !prevValue)
  }

  // Lo que quiera que devuelva el hook
  return [show, onToggle];
}