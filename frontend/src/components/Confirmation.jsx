import React, { useState } from "react";

const Confirmation = ({ onDelete, onCancel }) => {
    const [showModal, setShowModal] = useState(true);

    const handleDelete = () => {
        onDelete();
        setShowModal(false);
    };

    const handleCancel = () => {
        onCancel();
        setShowModal(false);
    };

    return (
        <>
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-500 bg-opacity-75">
                    <div className="p-4 bg-white">
                        <h2 className="mb-4 text-xl font-bold">
                            Are you sure you want to delete this post?
                        </h2>
                        <div>
                            <button
                                onClick={handleDelete}
                                className="px-4 py-2 text-white bg-purple-500"
                            >
                                Confirm
                            </button>
                            <button
                                onClick={handleCancel}
                                className="px-4 py-2 ml-2"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Confirmation;
