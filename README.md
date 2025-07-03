***ImgCraft***
A full-stack image processing application built with JavaScript — designed to let users upload, transform, and view images easily.

***🚀 Features***
Image Upload: Users can select and upload images through a user-friendly interface.

Transformations: Supports basic (and customizable) image manipulation operations (e.g., resize, crop, filters).

Preview & Download: View processed images in-browser and download the results.

Modular Architecture: Separate client and server directories for clean and maintainable code structure.

***🔧 Setup & Installation***
1. Clone the repository
bash
Copy
Edit
git clone https://github.com/Sohamsurve/ImgCraft.git
cd ImgCraft
2. Install dependencies for both client and server
bash
Copy
Edit
cd client
npm install

cd ../server
npm install
3. Run in development mode
bash
Copy
Edit
# In one terminal
cd server
npm start             # Or: nodemon if configured

# In another terminal
cd client
npm start             # Runs React (or plain JS) app at http://localhost:3000
