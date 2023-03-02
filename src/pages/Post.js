import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Post = () => {

    const [post, setPost] = useState({});
    const {id} = useParams();

    useEffect(() => {
        const getOnePost = () => {
            fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => response.json())
            .then(data => setPost(data))
        }

        getOnePost();
    }, [id])
    return (
        <div className="solo-post">
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    )
}

export default Post;