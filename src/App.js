import Nav from "./nav";
import Home from "./home.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreateBlog from "./create.js";
import BlogDetails from "./BlogDetails.js";
import PageNotFound from "./PageNotFound.js";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateBlog />} />
          <Route path="/:id" element={<BlogDetails />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
