import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RootLayout from './layout/RootLayout.jsx';
import Home from "./pages/Home/Home.jsx";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;