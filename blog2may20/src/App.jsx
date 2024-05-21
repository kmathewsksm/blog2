import "./App.css";
import { HomePage } from "./pages/HomePage";
import { Blogs } from "./pages/Blogs";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <nav variant="tabs" defaultValue="/">
          <ul class="nav nav-pills justify-content-left mx-2">
            <li class="nav-item" role="presentation">
              <Link class="nav-link active" aria-current="page" href="#" to="/">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link
                class="nav-link active"
                aria-current="page"
                href="#"
                to="/posts"
              >
                Blogs
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/posts" element={<Blogs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
