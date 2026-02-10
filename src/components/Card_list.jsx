import { useState, useEffect } from "react";
import postsData from "../posts_temp.json";
import Card from "./Card";
import "../styles/Card.css";
import { Link } from "react-router-dom";

function CardList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setPosts(postsData);
    setLoading(false);
  }, []);

  return (
    <div className="card-list-container">
      <Link className="home-link" to="/">
        Back
      </Link>

      <div className="cardlist-header">
        <img
          className="mca-icon"
          src="https://zvd-uploads.s3.us-east-1.amazonaws.com/mcaround.png"
          alt="MCA logo"
        />
        <p>Projects by graduates of the Mississippi Coding Academies</p>
      </div>

      {loading ? (
        <div className="spinner">Loading...</div>
      ) : (
        <div className="card-grid">
          {posts.map((post) => (
            <Card key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}

export default CardList;
