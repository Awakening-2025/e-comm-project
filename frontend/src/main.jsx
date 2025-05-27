import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx'
import favicon from './assets/websitelogo.jpeg';


const setFavicon = (url) => {
  const link = document.createElement('link');
  link.rel = 'icon';
  link.type = 'image/jpeg'; // Change to image/png if your favicon is PNG
  link.href = url;
  document.head.appendChild(link);
};

setFavicon(favicon);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
