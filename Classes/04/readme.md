# React Background Color Changer

This is a basic React project where users can dynamically change the background color of a webpage by clicking buttons. The project is built with **React Vite** and styled using **Tailwind CSS**. It demonstrates the use of the `useState` hook to manage and update the background color state.

---

## Features
- **Dynamic Background Color Change**: The background color changes when a button is clicked.
- **Initial State**: The default background color is light blue.
- **Responsive Design**: Styled with Tailwind CSS for a modern and clean UI.

---

## Installation and Setup

### Prerequisites
- Node.js installed on your system.

### Steps
1. Clone the repository:
   ```bash
   git clone <repository-link>
   cd <project-folder>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to the local server URL (e.g., `http://localhost:5173`).

---

## Usage

1. By default, the background color is light blue.
2. Click on any color button (Red, Green, Blue) to change the background color.

---

## Code Explanation

### Main Component (`App.jsx`)
```jsx
import React, { useState } from "react";

const App = () => {
  const [bgColor, setBgColor] = useState("bg-light-blue-500");

  const handleColorChange = (color) => {
    setBgColor(color);
  };

  return (
    <div className={`h-screen ${bgColor} flex items-center justify-center`}>
      <div className="space-x-4">
        <button
          onClick={() => handleColorChange("bg-red-500")}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          Red
        </button>
        <button
          onClick={() => handleColorChange("bg-green-500")}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          Green
        </button>
        <button
          onClick={() => handleColorChange("bg-blue-500")}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Blue
        </button>
      </div>
    </div>
  );
};

export default App;
```

---

## Tailwind CSS Setup

1. Install Tailwind CSS:
   ```bash
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init
   ```

2. Configure `tailwind.config.js`:
   ```javascript
   module.exports = {
     content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
     theme: {
       extend: {},
     },
     plugins: [],
   };
   ```

3. Add Tailwind CSS directives in `index.css`:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

---

## Project Structure

```
├── src
│   ├── App.jsx         # Main component with background change logic
│   ├── index.css       # Tailwind CSS file
│   └── main.jsx        # Entry point of the React app
├── public
│   └── index.html      # Main HTML file
├── tailwind.config.js  # Tailwind configuration
├── package.json        # Project metadata and dependencies
├── vite.config.js      # Vite configuration
└── README.md           # Project documentation
```

---

## Future Enhancements

- Add more color buttons for additional options.
- Allow users to input custom colors using a color picker.
- Save the selected background color in local storage for persistence.

---

## License
This project is open-source and free to use. Feel free to modify and enhance it!

---

## Acknowledgments
- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)

---
Happy Coding! 🚀
```

