import React, { useState, useEffect } from "react";
import List from "../components/List";
import Modal from "../components/Modal";
import Confirmation from "../components/Confirmation";
import axios from "axios";

const Home = () => {
    const [posts, setPosts] = useState([]);
    const [selectedPost, setSelectedPost] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isConfirmationModalOpen, setIsConfirmationModalOpen] =
        useState(false);
    const [postToDelete, setPostToDelete] = useState(null);

    useEffect(() => {
        axios
            .get("http://blog-demo.test/api/posts")
            .then((response) => {
                setPosts(response.data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    const addPost = (post) => {
        axios
            .post("http://blog-demo.test/api/posts", post)
            .then((response) => {
                setPosts([...posts, response.data]);
            })
            .catch((error) => {
                console.error("Error adding post:", error);
            });
    };

    const editPost = (post) => {
        setSelectedPost(post);
        setIsModalOpen(true);
    };

    const updatePost = (updatedPost, updatedFormData) => {
        const updatedPostData = {
            ...updatedPost,
            ...updatedFormData,
        };

        axios
            .put(
                `http://blog-demo.test/api/posts/${updatedPost.id}`,
                updatedPostData
            )
            .then(() => {
                const updatedPosts = posts.map((post) =>
                    post.id === updatedPost.id ? updatedPostData : post
                );
                setPosts(updatedPosts);
                setSelectedPost(null);
            })
            .catch((error) => {
                console.error("Error updating post:", error);
            });
    };

    const deletePost = (id) => {
        setIsConfirmationModalOpen(true);
        setPostToDelete(id);
    };

    const confirmDelete = () => {
        axios
            .delete(`http://blog-demo.test/api/posts/${postToDelete}`)
            .then(() => {
                const updatedPosts = posts.filter(
                    (post) => post.id !== postToDelete
                );
                setPosts(updatedPosts);
                setSelectedPost(null);
                setIsConfirmationModalOpen(false);
            })
            .catch((error) => {
                console.error("Error deleting post:", error);
            });
    };

    const cancelDelete = () => {
        setIsConfirmationModalOpen(false);
        setPostToDelete(null);
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedPost(null);
    };

    return (
        <div>
            <List posts={posts} editPost={editPost} deletePost={deletePost} />
            <button
                onClick={openModal}
                className="px-4 py-2 mt-4 text-white bg-purple-500"
            >
                Create New Post
            </button>
            <Modal
                isOpen={isModalOpen}
                onClose={closeModal}
                selectedPost={selectedPost}
                onSave={
                    selectedPost
                        ? (updatedFormData) =>
                              updatePost(selectedPost, updatedFormData)
                        : addPost
                }
            />
            {isConfirmationModalOpen && (
                <Confirmation
                    onDelete={confirmDelete}
                    onCancel={cancelDelete}
                />
            )}
        </div>
    );
};

export default Home;
