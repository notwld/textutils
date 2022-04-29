import About from "./components/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import TextForm from "./components/TextForm";

function App() {
  return (
    <div className="App">
      <div className="container">
        <BrowserRouter>
          <Nav />
          <Routes path="/" element={<App />}>
            <Route path="/" element={<TextForm />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
