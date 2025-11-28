import Header from "./Header";
import Products from "./Product";
import { useState } from "react";
import CartList from "./CartList";
import "./App.css";


function App() {
  const [product] = useState([
    
    {
     
      url:
         '\dow.jpg.png',
      name: 'Lenovo Ideapad Slim 3',
      category: 'Laptop',
      seller: 'Lenovo',
      price: 57000
    },

    {
      url:
       '\dowww.png',
      name: 'Fastrack W98',
      category: 'Watch',
      seller: 'Fastrack',
      price: 1599
    },

    {
      url: '/downnnnn.png',
      name: 'Mi 12 Pro',
      category: 'Mobile',
      seller: 'Ultra Galaxy',
      price: 10000
    },

    {
      url: '/headphone.png',
      name: 'boAt V20',
      category: 'Headset',
      seller: 'boAt',
      price: 999
    },

    {
      url: '/washing.png',
      name: 'IFB Washing Machine',
      category: 'Electronics',
      seller: 'Electro',
      price: 2000
    }

  ]);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (data) => {
    setCart([...cart, { ...data, quantity: 1 }]);
  };

  const handleShow = (value) => {
    setShowCart(value);
  };

  return (
    <div style={{textAlign:'center'}}>
      <Header count={cart.length} handleShow={handleShow} />
      {
        showCart ?
          <CartList cart={cart} /> :
          <Products product={product} addToCart={addToCart} />
      }
    </div>
  )
}

document.querySelector('body')
 {
   alert("please make order")
 }
export default App;
