import { useState } from "react";
import "./Comments.css";

export default function Comments() {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [commentsList, setCommentsList] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (name && comment) {
      const newComment = { name, comment };
      setCommentsList([...commentsList, newComment]);
      setComment("");
      setName("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="form-container">
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name..."
        />
        <input
          type="text"
          id="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Add a comment..."
        />
        <button type="submit">Comment</button>
      </form>
      <div>
        {commentsList.map((item, index) => (
          <div key={index} className="comment">
            <p>
              <strong>{item.name}</strong>: {item.comment}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
