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
    //setChangeUser(!changeUSer);
    setUserName(user);
    setChangeUser(!changeUSer);
  }
    

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/chat' element={<Chat UserName={userName} />}></Route>
      <Route path="*" element={<HomePage change={changeUser} />}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
