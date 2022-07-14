import "./style/App.css";
import Home from "./views/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./views/notfound";
import Blog from "./views/Blog";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
