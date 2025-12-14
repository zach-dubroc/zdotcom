import React, { useState, useEffect } from "react";
import postsData from "../posts_temp.json";
import Card from "./Card";
import "../styles/Card.css";
import { Link } from "react-router-dom";
function CardList() {
  const [posts, setPosts] = useState([]);
  const [showUpload, setShowUpload] = useState(false);
  const [loading, setLoading] = useState(true);
  const [password, setPassword] = useState("");
  const [showPasswordPrompt, setShowPasswordPrompt] = useState(false);

  const PASSWORD = import.meta.env.PASSWORD;
  //not today but one day

  const fetchPosts = () => {
    setLoading(true);
    //nahhhhhhhh
    setPosts(postsData);
    setLoading(false);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="card-list-container">
      <Link className="home-link" to="/">
        back
      </Link>
      <h2>final projects</h2>
      <p>
        from graduates of the mississippi coding acedemies
        <br />
      </p>
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
