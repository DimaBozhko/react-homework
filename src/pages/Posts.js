import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getAllPosts = () => {
            fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(data => setPosts(data))
        }
        getAllPosts();
    }, [])
    return (
        <div className='posts'>
            <h1>Posts</h1>
            <ol>
            {posts.map(post => (
                <li key={post.id}>
                <Link to={`${post.id}`}>
                    <h2>{post.title}</h2>
                </Link>
                <p>{post.body}</p>
                </li>
            ))}
            </ol>
        </div>
    )
    

}

export default Posts;