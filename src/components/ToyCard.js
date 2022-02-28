import React from "react";

function ToyCard({ toy, onToyDelete, onToyLikesIncrease }) {
  const { id, image, name } = toy;
  let { likes } = toy;

  const handleToyDelete = () => {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "DELETE"
    })
    .then(res => res.json())
    .then(() => onToyDelete(id));
  }

  const handleLikes = () => {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        likes: ++likes
      })
    })
    .then(res => res.json())
    .then(data => onToyLikesIncrease(data));
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn" onClick={() => handleLikes()}>Like {"<3"}</button>
      <button className="del-btn" onClick={() => handleToyDelete()}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
