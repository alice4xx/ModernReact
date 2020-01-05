import React,{useRef, useState} from 'react';
import UserList from './UserList'
import CreateUser from './CreateUser';
import './App.css'


function App() {
  const [inputs, setInputs]= useState({
    username:"", 
    email:""
  });
  const {username, email} =inputs;

  const onChange = e=>{
  const { name, value}= e.target;
  
  setInputs({
    ...inputs,
    [name]:value
  })
  // console.log(name,value)
}
  const [users, setUsers] =useState( [
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com'
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com'
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com'
    }
  ]);

  const nextId = useRef(4);
  const onCreate = () => {
    const user ={
      id : nextId.current,
      username,
      email
    }
    setUsers ([...users,user])
    console.log("user", user)
    console.log("users", users)
    setInputs({
      username :"",
      email:""
    })
    nextId.current += 1;
    console.log("ref는어딧지", nextId.current)
    };
  return (
    <>
    <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate}/>
  <UserList users={users}/>
  </>
  );
}

export default App;
