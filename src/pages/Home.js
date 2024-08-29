import React, { useState } from 'react'
import '../index.css'
import GoToPost from '../components/GoToPost'
function Home() {
    const [count,setCount] = useState(0)
    return (
        <div className='ml-28 justify-center items-center'>
            <GoToPost/>
            <div className="flex-grow p-6">
                <p>You have clicked me {count} times</p>
                <button onClick={() => setCount(count + 1)} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Click me</button>
            </div>
        </div>
    )
}

export default Home
