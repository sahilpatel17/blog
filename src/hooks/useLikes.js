// src/hooks/useLikes.js
import { useState } from 'react';

const useLikes = (initialLikes) => {
  const [likes, setLikes] = useState(initialLikes);

  const incrementLikes = (index) => {
    const newLikes = [...likes];
    newLikes[index] += 1;
    setLikes(newLikes);
  };

  return [likes, incrementLikes];
};

export default useLikes;
