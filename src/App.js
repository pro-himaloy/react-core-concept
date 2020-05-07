import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['Razzak', 'Alomgir', 'Jashim', 'Zaki', 'Shimul', 'Taki']
  const products =[
    {name:'Photoshop', price: '$99.99'},
    {name:'Illustrator', price: '$49.99'},
    {name:'PDF Reader', price: '$9.99'}
  ]
    return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        <Users></Users>
        <ul>
          {nayoks.map(himu=><li>{himu}</li>)}
          {products.map(sicily=><li>{sicily.name}</li>)}
        </ul>
      {
        products.map(himu => <Product product = {himu}></Product>)
      }
      </header>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  
  return(
    <div>
      <h1>Count : {count}</h1>
      <button onClick = {() => setCount(count+1)}>Increase</button>
      <button onClick = {() => setCount(count-1)}>Decrease</button>
    </div>
  )  
}

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data=>setUsers(data));
  }, [])
  return(
    <div>
      <h1>Dynamic Users: {users.length}</h1>
      <ul>
        {
          users.map(user=> <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
  
}

function Product(props) {
  const productStyle = {
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '200px',
    width: '250px',
    float: 'left'
  }
  const {name, price} = props.product;
  
  return (
  <div style = {productStyle}>
  <h3>Name: {name}</h3>
  <h2>Price: {price}</h2>
  <button>Buy Now</button>
  </div>
  ) 
}
export default App;
