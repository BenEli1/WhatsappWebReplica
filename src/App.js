import HomePage from './LoginPage/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Chat from './Chat/Chat';
import 'bootstrap';
import {useState} from 'react'
function App() {

  const [userName, setUserName] = useState('');
  const [changeUSer, setChangeUser] = useState(true);

  let path = '/chat?userName=' + userName;

  const changeUser = function(user){
    setChangeUser(!changeUSer);
    setUserName(user);
    alert(userName)
    alert(path)
    setChangeUser(!changeUSer);
  }

  return (
    <BrowserRouter>
    <Routes>
      <Route path={'/chat?userName=' + userName}  id="path" element={<Chat />}></Route>
      <Route path="*" element={<HomePage change={changeUser} />}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
