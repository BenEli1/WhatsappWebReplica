import HomePage from './LoginPage/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Chat from './Chat/Chat';
import 'bootstrap';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/chat" element={<Chat />} ></Route>
      <Route path="*" element={<HomePage/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
