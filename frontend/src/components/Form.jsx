import React, { useState, useEffect } from "react";

const Form = ({ addPost, selectedPost, updatePost }) => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [author, setAuthor] = useState("");

    useEffect(() => {
        if (selectedPost) {
            setTitle(selectedPost.title);
            setContent(selectedPost.content);
        }
    }, [selectedPost]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (selectedPost) {
            updatePost({ ...selectedPost, title, author, content });
        } else {
            addPost({ id: Date.now(), title, author, content });
        }

        setTitle("");
        setAuthor("");
        setContent("");
    };

    return (
        <div>
            <h2>{selectedPost ? "Edit Post" : "Add Post"}</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    required
                    onChange={(e) => setTitle(e.target.value)}
                />
                <br />
                <input
                    type="text"
                    placeholder="Author"
                    value={author}
                    required
                    onChange={(e) => setAuthor(e.target.value)}
                />
                <br />
                <textarea
                    placeholder="Content"
                    required
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
                <br />
                <button type="submit">{selectedPost ? "Update" : "Add"}</button>
            </form>
        </div>
    );
};

export default Form;
