import React from 'react';

const Postcard = () => {
  return (
    <div className="postcard">
      <img src="image.jpg" alt="Postcard Image" />
      <div className="postcard-content">
        <h2>Postcard Title</h2>
        <p>Postcard Message</p>
        <p>From: Your Name</p>
        <p>To: Recipient's Name</p>
      </div>
    </div>
  );
};

export default Postcard;