import { useState } from 'react';
import './App.css';
import UserList from './UserList';
import Userform from './Userform';
import UserList2 from './UserList2';

function App() {
  const [users,setUsers]=useState([])

const onUserAdd=(user)=>{
  setUsers([...users,user])
}
  return (
    <>
      <Userform onUserAdd={onUserAdd}/>
      <hr/>
      <UserList users={users}/>
      {/* <UserList2 users={users}/> */}
    </>
  );
}

export default App;
