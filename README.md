#creating react app
npx create-react-app client

#if file already exists
cd path-to-the-folder
npx create-react-app .
------------------------------------------------------------
#installing tailwindcss
npm install -D tailwindcss
npx tailwindcss init

#in tailwindconfig.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

#in index.css

@tailwind base;
@tailwind components;
@tailwind utilities;
--------------------------------------------------------------------------

#installing react router dom
npm install react-router-dom

