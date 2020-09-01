import React, { useState, useEffect } from 'react';
import logo from './jewel.jpg';
import './App.css';

function App() {
  const student = [
    {name:'jewel rana', title:'developer', phone:'0145785452'},
    {name:'suhel rana', title:'developer', phone:'0145785452'},
    {name:'kamal', title:'developer', phone:'0145785452'},
    {name:'Ferdous', title:'developer', phone:'0145785452'},
  ]
  return (
    <div className="App">
      <header className="App-header">
      {
        student.map(studentDitails => <Students name={studentDitails.name} phone= {studentDitails.phone} title = {studentDitails.title}></Students>)
      }
      {/* <Students></Students> */}
      <User></User>
      <RandomUser></RandomUser>
      </header>
    </div>
  );
}

function Students(props){
  return(
    <div className="">
      <h3>Name:{props.name}</h3>
      <p>phone: {props.phone}</p>
      <p>Title: {props.title}</p>
    </div>
  )
}


function User(){
  const [user, setuser] = useState([]);
  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(res => res.json())
    .then(data =>setuser(data))
  },[])
  return(
    <div className="">
      <h1>name:{user.length}</h1>
      {
       user.map(user => <div>{user.name}</div>)
      }
    </div>
  )
}
// error------------------area----------------------
function RandomUser(){
  const [randomUser, setRandomUser] = useState([]);
  useEffect(() => {
      fetch('https://randomuser.me/api/')
      .then(res => res.json())
      .then(data =>{
        console.log(data)
        setRandomUser(data.results)
      })
    },[])

  return(
    <div className="">
      <h3>users:{randomUser.length}</h3>
      <h1> Name :{randomUser.results}</h1>
      {
        randomUser.map(userData => <li>{userData.results}</li>)
      }
    </div>
  )
}
//end of error area.....................

export default App;
