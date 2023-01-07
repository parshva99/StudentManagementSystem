import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NavBar from './NavBar';
import Home from './Home';
import Create from './Create';
import Update from './Update';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/create" element={<Create />}></Route>
          <Route path="/update" element={<Update />}></Route>
          <Route path="*" element={<Navigate to="/" />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
