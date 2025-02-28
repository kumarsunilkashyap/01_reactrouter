# React + Vite
## Create  a Project
1. npm create vite@latest .
2. Select Framework   React
3. Select Varient Javascript
4. npm install
## Run the project 
npm run dev

# Install Tailwind css
 1. npm install tailwindcss @tailwindcss/vite
 2. Configure the Vite plugin
 import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})
# Import tailwind css index file
 @import "tailwindcss";

