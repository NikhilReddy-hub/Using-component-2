import { useState } from "react";
import "./App.css";

function App() {
  const initialPosts = [
    {
      id: 1,
      profileImage:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",
      username: "alice",
      content: "This is my first post!",
      isLiked: false,
    },
    {
      id: 2,
      profileImage:
        "https://writestylesonline.com/wp-content/uploads/2016/08/Follow-These-Steps-for-a-Flawless-Professional-Profile-Picture.jpg",
      username: "bob",
      content: "Loving this social media app.",
      isLiked: true,
    },
    {
      id: 3,
      profileImage:
        "https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001882.png",
      username: "charlie",
      content: "Just another day...",
      isLiked: false,
    },

  ];

  return (
    <div className="App">
      <header className="App-header">
        {initialPosts.map((post) => (
          <div key={post.id} className="post">
            <img
              src={post.profileImage}
              alt={post.username}
              style={{ width: "50px", height: "50px", objectFit: "cover" }}
            />
            <div className="post-content">
              <h2>{post.username}</h2>
              <p>{post.content}</p>
              <button
                className={`like-button ${post.isLiked ? "liked" : ""}`}
                onClick={() => console.log(`Like post ${post.id}`)}
              >
                Like
              </button>
            </div>
          </div>
        ))}
      </header>
    </div>
  );
}

export default App;
