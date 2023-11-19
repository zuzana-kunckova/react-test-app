import React from "react";

const List = ({ posts, editPost, deletePost }) => {
    return (
        <div>
            <h1 className="my-5 text-xl font-semibold text-center">Posts</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id} className="my-5">
                        <a href="">
                            <div className="font-bold">{post.title}</div>

                            <div>{post.content}</div>
                        </a>

                        <div className="space-x-5 space-y-5 border-b-2">
                            <button onClick={() => editPost(post)} className="">
                                Edit Post
                            </button>
                            <button onClick={() => deletePost(post.id)}>
                                Delete Post
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default List;
