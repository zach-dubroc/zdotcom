import React from "react";
import "../styles/Card.css";

function Card({ post }) {
  return (
    <div className="card">
      {/* wrapped image in a container so aspect-ratio actually works */}
      <div className="image-container">
        <img
          className="card-image"
          src={post.image_url}
          alt={post.image_title}
        />
      </div>
      <div className="card-content">
        <p>{post.description}</p>

        <div className="card-footer">
          <h2>
            {post.fname} {post.lname}
          </h2>

          <div className="card-buttons">
            <a
              href={post.git_link}
              target="_blank"
              rel="noopener noreferrer"
              className="card-button-link"
            >
              GitHub
            </a>
            <a
              href={post.game_link}
              target="_blank"
              rel="noopener noreferrer"
              className="card-button-link"
            >
              Play
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
