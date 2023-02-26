import React, { useState, useEffect } from 'react';
import "./Posts.css"

const Posts = () => {

  const [posts, setPosts] = useState([]);

  const fetchData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data))
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div className='posts'>
      <h1>Posts</h1>
      <ol>
        {posts.map(post => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ol>
    </div>
  );

}

export default Posts;
