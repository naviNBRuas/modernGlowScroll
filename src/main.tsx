
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Ensure the DOM is fully loaded before rendering
const root = document.getElementById("root");
if (root) {
  createRoot(root).render(<App />);
} else {
  console.error("Root element not found");
}
