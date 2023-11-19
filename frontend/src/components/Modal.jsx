import React, { useState, useEffect } from "react";

const Modal = ({ isOpen, onClose, selectedPost, onSave }) => {
    const [formData, setFormData] = useState({
        author: "",
        title: "",
        content: "",
    });

    useEffect(() => {
        if (selectedPost) {
            setFormData({
                author: selectedPost.author || "",
                title: selectedPost.title || "",
                content: selectedPost.content || "",
            });
        }
    }, [selectedPost]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSave = () => {
        onSave(formData);
        closeModal();
    };

    const closeModal = () => {
        setFormData({
            author: "",
            title: "",
            content: "",
        });
        onClose();
    };

    return (
        <div
            className={`modal ${
                isOpen ? "block" : "hidden"
            } fixed inset-0 bg-gray-500 bg-opacity-75 z-50 flex justify-center items-center`}
        >
            <div className="p-4 bg-white">
                <h2 className="mb-4 text-xl font-bold">
                    {selectedPost ? "Edit Post" : "Create New Post"}
                </h2>
                <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    className="w-full p-2 mb-2 border border-gray-300"
                    placeholder="Title"
                />
                <input
                    type="text"
                    name="author"
                    value={formData.author}
                    onChange={handleInputChange}
                    className="w-full p-2 mb-2 border border-gray-300"
                    placeholder="Author"
                />
                <textarea
                    name="content"
                    value={formData.content}
                    onChange={handleInputChange}
                    className="w-full p-2 mb-4 border border-gray-300"
                    rows="4"
                    placeholder="Content"
                ></textarea>
                <button
                    onClick={handleSave}
                    className="px-4 py-2 text-white bg-purple-500"
                >
                    Save
                </button>
                <button onClick={closeModal} className="px-4 py-2 ml-2">
                    Cancel
                </button>
            </div>
        </div>
    );
};

export default Modal;
