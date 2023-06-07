import React, {useEffect, useState} from 'react';
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";

const PostIdPage = () => {
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const id = Number(document.location.pathname.slice(7));

    const [fetchPostById, isLoading, error] = useFetching(async () => {
        const response = await PostService.getById(id);
        setPost(response.data);
    })

    const [fetchComments, isComLoading, comError] = useFetching(async () => {
        const response = await PostService.getCommentsByPostId(id);
        setComments(response.data);
    })

    useEffect(() => {
        fetchPostById();
        fetchComments();
    }, []);

    return (
        <div style={{width: '800px'}}>
            <h1>
                You opened the post number {id}.</h1>
            {isLoading
                ? <Loader/>
                : <div>{post.title}<br/>{post.body}</div>
            }
            <h1>Comments:</h1>
            {isComLoading
                ? <Loader/>
                : <div>
                    {comments.map(comm =>
                        <div key={comm.id} style={{marginTop: '15px'}}>
                            <h5>{comm.email}</h5>
                            <div>{comm.body}</div>
                        </div>
                    )}
                </div>
            }
        </div>
    );
};

export default PostIdPage;