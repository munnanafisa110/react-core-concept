import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

 function App() {
   const nayoks = ['anwar','jafor','alomgir','salman']
    const products =[{name:'photoshop',price:'$100'},
                     {name:'illustrator',price:'$345'},
                    {name:'pdf-reader',price:'$56'}]
      //const productNames = products.map(product => products.name);
     // console.log(productNames);
     
    // const nayokNames = nayoks.map(nayok => nayoks)
     //console.log(nayokNames);
     const friends = ['bulbul','sabana','sokina']
  return (
     <div className="App">
       <header className="App-header">
       <p> i am a react person</p>
       <Counter></Counter>
       <Users></Users>
       <ul>
         {/* <li>{nayoks[0]}</li>
         <li>{nayoks[1]}</li>
         <li>{nayoks[2]}</li>
         <li>{nayoks[3]}</li> */}
         {
           nayoks.map(nayok => <li>{nayok}</li>)
         }
         {
           products.map(product => <li>{product.name}</li>)
         }
         {
           friends.map(friend => <li>{friend}</li>)
         }

       </ul>
       {
         products.map(product => <Product product={product}></Product>)
       }
       {/* <Person name="munna" job="teacher"></Person>
       <Person name="afra" job="student"></Person> */}
       {/* <Product product = {products[0]}></Product>
       <Product product = {products[1]}></Product> */}


       </header>
        

         
     </div>
  );
}
 function Counter(){
   const [count,setCount] = useState(10);
   const handleIncrease = () => setCount(count+1);//{
     //const newCount = count+1;
     //setCount(newCount);
     //setCount(count+1);
   //}
   return(
     <div>
       <h1>Count:{count}</h1>
       {/* <button onClick ={handleIncrease}>Increase</button> */}
       {/* <button onClick ={() => setCount(count+1)}>Increase</button> */}
       <button onMouseMove={() => setCount(count+1)}>Increase</button>
       <button onClick ={() => setCount(count-1)}>Decrease</button>
     </div>
   )
 }

 function Users(){
   const [users,setUsers]=useState([]);
   useEffect(()=>{
     fetch('https://jsonplaceholder.typicode.com/users')
     .then(res=>res.json())
     .then(data =>setUsers(data));
   },[])
   return(
     <div>
       <h3>dynamic Users:{users.length}</h3>
       {
         //console.log(users)
        
         users.map(user=><li>{user.phone}</li>)
       }
     </div>
   )
 }


  function Person(props){
    return(
      <div style={{border:'2px solid salmon',margin:'10px',padding:'10px'}}>
        <h1>my name: {props.name}</h1>
        <p> job: {props.job}</p>
        
      </div>
    )
  }


function Product(props){
  const productStyle={
    border:'2px solid salmon',
    borderRadious: '5px',
    backgroundColor: 'white',
    height:'400px',
    width:'200px',
    float: 'left',
    color: 'red'
  }
  //console.log(props);
  const {name,price}=props.product;
  console.log(name,price)
  return(
    <div style={productStyle}>
      <h1>{price}</h1>
      <h2>{name}</h2>
      <button>buy now</button>

    </div>

  )
}

export default App;
