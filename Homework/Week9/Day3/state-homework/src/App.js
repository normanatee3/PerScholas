import './css/App.css';
import { useState } from 'react';
import Products from './models/Products';
import Cart from './components/Cart';
import Shop from './components/Shop';

function App() {

  const [count01 , setCount01] = useState(0)

  const increaseCount01 = () =>{
    console.log('CurrentCount01:', count01);
    setCount01(count01 + 1)
    
  }
  const resetCount01 = () =>{
    
    setCount01(0)
    
  } 
  const [count02 , setCount02] = useState(0)

  const increaseCount02 = () =>{
    console.log('CurrentCount02:', count02);
    setCount02(count02 + 1)
    
  }
  const resetCount02 = () =>{
    
    setCount02(0)
    
  } 
  const [count03 , setCount03] = useState(0)

  const increaseCount03 = () =>{
    console.log('CurrentCount03:', count03);
    setCount03(count03 + 1)
    
  }
  const resetCount03 = () =>{
    
    setCount03(0)
    
  } 


  return (
    <div className="App">
      <Shop 
      add1 = {increaseCount01}
      add2 = {increaseCount02}
      add3 = {increaseCount03}
      products = {Products}
      />
      <Cart 
      reset1 = {resetCount01}
      reset2 = {resetCount02}
      reset3 = {resetCount03}
      products = {Products}
      count1 = {count01}
      count2 = {count02}
      count3 = {count03}
      />





    </div>
  );
}

export default App;
