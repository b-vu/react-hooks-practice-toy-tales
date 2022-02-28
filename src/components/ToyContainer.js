import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, onToyDelete, onToyLikesIncrease }) {
  return (
    <div id="toy-collection">{toys.map(toy => {
      return <ToyCard key={toy.id} toy={toy} onToyDelete={onToyDelete} onToyLikesIncrease={onToyLikesIncrease}></ToyCard>
    })}</div>
  );
}

export default ToyContainer;
