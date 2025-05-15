
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Polyfill for WebGL & Three.js
if (typeof window !== 'undefined') {
  // Check for WebGL support
  const canvas = document.createElement('canvas');
  const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
  
  if (!gl) {
    console.warn('WebGL is not supported in this browser. Some 3D effects may not render properly.');
  }
}

createRoot(document.getElementById("root")!).render(<App />);
