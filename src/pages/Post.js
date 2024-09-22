import React, { createContext, useState } from 'react';
import { UserContext } from '../context/UserContext';
const Post = () => {
    const [username, setUsername] = useState('');
    const [caption, setCaption] = useState('');
    const [file, setFile] = useState(null);
    const fileLimit = 250000; 

    const handleFileChange = (e) => {
        if (e.target.files[0].size > fileLimit) {
            alert("File is over 25MB!");
            return;
        }
        setFile(e.target.files[0]);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        if (e.dataTransfer.files[0].size > fileLimit) {
            alert("File is over 25MB!");
            return;
        }
        setFile(e.dataTransfer.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (file && file.size > fileLimit) {
            alert("File is over 25MB!");
            return;
        }
        console.log({ username, caption, file });
    };
    const user = createContext(UserContext);
    return (
        <div className="max-w-lg mx-auto p-6 ml-52 bg-white shadow-lg rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Create a Post</h2>
            <form onSubmit={handleSubmit} onReset={() => setFile(null)} className="space-y-4">
                <div className='place-items-center flex'>
                   <img src = {user.dp} alt='profile pic'/>
                    <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                        {user.username}
                    </label>
                </div>

                <div
                    className="relative p-6 border-2 border-dashed border-gray-300 rounded-md text-center cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition"
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={handleDrop}
                >
                    <div className="flex justify-center items-center flex-col">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-12 w-12 text-gray-400 mb-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M7 18a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7h-1M9 15l3 -3l3 3M12 12l0 9"
                            />
                        </svg>
                        <p className="text-gray-500">
                            {file ? `${file.name}, ${file.size} bytes` : "Click to upload or drag and drop"}
                        </p>
                    </div>
                    <input
                        type="file"
                        id="upload-file"
                        name="uploaded-file"
                        accept="image/*"
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        onChange={handleFileChange}
                    />
                </div>

                <div>
                    <label htmlFor="caption" className="block text-sm font-medium text-gray-700">
                        Caption
                    </label>
                    <textarea
                        id="caption"
                        name="caption"
                        value={caption}
                        onChange={(e) => setCaption(e.target.value)}
                        rows="3"
                        className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    ></textarea>
                </div>

                <div className="flex justify-between items-center mt-4">
                    <button
                        type="reset"
                        className="px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
                    >
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Post;