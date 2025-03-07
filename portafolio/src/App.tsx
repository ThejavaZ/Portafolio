import Header from "./components/Header";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/Home/Home";
import About from "./pages/About/About";
import ContactPage from "./pages/Contact/Contact";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<ContactPage />}></Route>
          <Route path="/projects"></Route>
          <Route path="/blog"></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
