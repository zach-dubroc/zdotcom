import React, { useState, useEffect } from "react";
import postsData from "../posts_temp.json";
import Card from "./Card";
import Upload from "./Upload";
import "../styles/Card.css";

function CardList() {
  const [posts, setPosts] = useState([]);
  const [showUpload, setShowUpload] = useState(false);
  const [loading, setLoading] = useState(true);
  const [password, setPassword] = useState("");
  const [showPasswordPrompt, setShowPasswordPrompt] = useState(false);

  const PASSWORD = import.meta.env.PASSWORD;
  //not today but one day
  const handlePasswordSubmit = () => {
    if (password === "321") {
      setShowUpload(true);
      setShowPasswordPrompt(false);
    } else {
      alert("invalid.");
    }
  };

  const fetchPosts = () => {
    setLoading(true);
    //nahhhhhhhh
    setPosts(postsData);
    setLoading(false);
  };

  useEffect(() => {
    fetchPosts();
  }, [showUpload]);

  return (
    <div className="card-list-container">
      <h2>mca final projects</h2>
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
