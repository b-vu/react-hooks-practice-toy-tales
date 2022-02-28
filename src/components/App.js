import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([]);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  useEffect(() => {
    fetch("http://localhost:3001/toys")
    .then(res => res.json())
    .then(data => setToys(data));
  }, []);

  const handleNewToySubmit = newToy => {
    setToys([...toys, newToy]);
  }

  const handleToyDelete = toyId => {
    const newToys = toys.filter(toy => toy.id !== toyId);
    setToys(newToys);
  }

  const handleToyLikesIncrease = newToyLikesObj => {
    const newToys = toys.map(toy => {
      if(toy.id === newToyLikesObj.id){
        return newToyLikesObj;
      }
      return toy;
    })
    setToys(newToys);
  }

  console.log(toys)

  return (
    <>
      <Header />
      {showForm ? <ToyForm onNewToySubmit={handleNewToySubmit}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} onToyDelete={handleToyDelete} onToyLikesIncrease={handleToyLikesIncrease}/>
    </>
  );
}

export default App;
