import { useState, useEffect } from 'react';
import { data } from '../data/data';

export default function useLastImage(id=undefined) {
  const [lastImage, setLastImage] = useState(null);
  const [idActual, setIdActual] = useState(id);

  useEffect(() => {
    setLastImage(findImage(idActual));
  }, [idActual]);

  return [lastImage, setIdActual]
}

function findImage(id) {
  console.log("data ", data)
  if (id === undefined) {
    return data[data.length - 1] || undefined;
  }
  const lastImg = data.find((item) => item.id === id);    
  return lastImg ? lastImg : undefined;
}