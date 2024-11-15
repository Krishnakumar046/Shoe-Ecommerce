import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Usecontext from './components/Usecontext.jsx';
import "./style.css"

createRoot(document.getElementById('root')).render(
  <Usecontext>

    <App />
  </Usecontext>,
)
