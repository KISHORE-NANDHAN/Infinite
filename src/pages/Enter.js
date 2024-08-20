import React from 'react';
import '../index.css';

function Enter() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="flex justify-between items-center p-6 bg-white shadow-md">
        <img src="https://firebasestorage.googleapis.com/v0/b/infiniteconnect-19162.appspot.com/o/logo.png?alt=media&token=da585e14-f4bd-4a00-ac98-cef73b6ccf54" alt="Logo" className="w-40 h-14" />
        <div className="space-x-4">
          <a href="/signup">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Signup
            </button>
          </a>
          <a href="/login">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Login
            </button>
          </a>
        </div>
      </header>

      <section
        className="flex flex-col items-center justify-center bg-cover bg-center py-20 text-white"
        style={{ backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/infiniteconnect-19162.appspot.com/o/background.jpg?alt=media&token=d2c63907-c2e3-4664-9a76-99ce3161576e)` }}
      >
        <h1 className="text-4xl font-bold mb-6">Welcome to Our Social Media Platform</h1>
        <p className="max-w-4xl text-center text-lg mb-8">
          Connect, share, and grow with us. Our platform allows you to interact, share updates,
          and stay connected with friends and communities. 
          InfiniteConnect is a social media platform that prioritizes security and meaningful connections. 
          Unlike traditional social networks, it offers a space where users can connect and share experiences without the distractions of instant messaging. With a strong focus on privacy,
           InfiniteConnect ensures that your personal information is protected with top-tier encryption, giving you peace of mind as you engage with your network. Whether you're sharing updates, joining interest-based communities, 
           or coordinating events, InfiniteConnect allows you to connect with others in a safe and secure environment.
        </p>
        <div className="space-x-4">
          <a href="/signup">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded">
              Signup
            </button>
          </a>
          <a href="/login">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded">
              Login
            </button>
          </a>
        </div>
      </section>

      <section className="py-12">
        <h2 className="text-center text-3xl font-semibold mb-8">Technologies We Use</h2>
        <div className="flex justify-center space-x-8">
          <div className="flex flex-col items-center">
            <img src="https://firebasestorage.googleapis.com/v0/b/infiniteconnect-19162.appspot.com/o/react-icon.png?alt=media&token=6129d2cf-9f5c-4089-9033-fa18697c965c" alt="React" className="w-16 h-16 mb-2" />
            <p>React</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="https://firebasestorage.googleapis.com/v0/b/infiniteconnect-19162.appspot.com/o/node-icon.png?alt=media&token=0a163481-b58c-4c97-82a1-7deee0312ba6" alt="Node.js" className="w-16 h-16 mb-2" />
            <p>Node.js</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="https://firebasestorage.googleapis.com/v0/b/infiniteconnect-19162.appspot.com/o/mongodb-icon.png?alt=media&token=0616a988-7fd6-41b1-b81d-aaa30f2ac2b5" alt="MongoDB" className="w-16 h-16 mb-2" />
            <p>MongoDB</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="https://firebasestorage.googleapis.com/v0/b/infiniteconnect-19162.appspot.com/o/aws-icon.png?alt=media&token=2da799f8-164b-442c-afcc-a0534942c9a4" alt="AWS" className="w-16 h-16 mb-2" />
            <p>AWS</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="https://firebasestorage.googleapis.com/v0/b/infiniteconnect-19162.appspot.com/o/github-icon.png?alt=media&token=09ea7473-9dd6-4d44-b957-694742740d58" alt="GitHub" className="w-16 h-16 mb-2" />
            <p>GitHub</p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <h2 className="text-center text-3xl font-semibold mb-8">Developed by</h2>
        <div className="flex justify-between p-4 gap-8 justify-items-center">
          <div className="bg-white p-6 rounded-lg space-y-4 shadow-lg w-64 h-64 flex flex-col justify-center items-start">
            <h3 className="text-xl font-semibold ml-4">J Kishore Nandhan</h3>
            <p className=''><strong>Institution</strong>:<br/> Lakireddy Balireddy College of Engineering</p>
            <p><strong>YEAR</strong>: 3RD YEAR</p>
          </div>
          <div className="bg-white p-6 rounded-lg space-y-4 shadow-lg w-64 h-64 flex flex-col justify-center items-start">
            <h3 className="text-xl font-semibold ml-10">V Nikhil</h3>
            <p className=''><strong>Institution</strong>:<br/> Lakireddy Balireddy College of Engineering</p>
            <p><strong>YEAR</strong>: 3RD YEAR</p>
          </div>
          <div className="bg-white p-6 rounded-lg space-y-4 shadow-lg w-64 h-64 flex flex-col justify-center items-start">
            <h3 className="text-xl font-semibold ml-4">D Varun</h3>
            <p className=''><strong>Institution</strong>:<br/> Lakireddy Balireddy College of Engineering</p>
            <p><strong>YEAR</strong>: 3RD YEAR</p>
          </div>
          <div className="bg-white p-6 rounded-lg space-y-4 shadow-lg w-64 h-64 flex flex-col justify-center items-start">
            <h3 className="text-xl font-semibold ml-4">VVSL Surya Narayana</h3>
            <p className=''><strong>Institution</strong>:<br/> Lakireddy Balireddy College of Engineering</p>
            <p><strong>YEAR</strong>: 3RD YEAR</p>
          </div>
          <div className="bg-white p-6 rounded-lg space-y-4 shadow-lg w-64 h-64 flex flex-col justify-center items-start">
            <h3 className="text-xl font-semibold ml-4">B Vivek</h3>
            <p className=''><strong>Institution</strong>:<br/> Lakireddy Balireddy College of Engineering</p>
            <p><strong>YEAR</strong>: 3RD YEAR</p>
          </div>
        </div>
      </section>

      <footer className="py-4 text-center bg-gray-200">
        <p>&copy; 2024 Social Media Platform. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Enter;
