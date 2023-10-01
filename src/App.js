import React, { useEffect } from "react";
import { useState } from "react";

function generateUsers() {
  return [
    "user1",
    "user2",
    "user3",
    "user4",
    "user5",
    "user6",
    "user7",
    "user8",
    "user9",
    "user10",
  ];
}

function App() {
  const [items, setItems] = useState(generateUsers());

  useEffect(() => {
    console.log(items);
  }, [items]);

  function onButtonClick() {
    const randomIndex = Math.floor(Math.random() * items.length);
    const updatedItems = [
      ...items.slice(0, randomIndex),
      ...items.slice(randomIndex + 1),
    ];
    setItems(updatedItems);
  }

  return (
    <>
      <button onClick={onButtonClick}>users left {items.length}</button>
    </>
  );
}

export default App;
