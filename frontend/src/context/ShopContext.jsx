import { createContext, useState, useEffect } from "react";
import {products} from '../assets/assets'
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const currency = "$"
    const delivery_fee = 10
    const [search , setSearch] = useState('');
    const [showSearch , setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});
    const navigate = useNavigate();

    const addToCart = async(itemId, size) => {
    if(!size){
        toast.error('Select Product Size');
        return;
    }
    let cartData = structuredClone(cartItems);
    if(cartData[itemId]){
        if(cartData[itemId][size]){
            cartData[itemId][size] += 1;
        }
        else{
            cartData[itemId][size] = 1;
        }
    }
    else{
        cartData[itemId] = {};
        cartData[itemId][size] = 1;

    }
    setCartItems(cartData);
    toast.success('Product Added to Cart');
    }

    const getCartCount = ()=>{
    let totalCount = 0;
    for(const items in cartItems){
        for(const item in cartItems[items]){
            try{
                if(cartItems[items][item] > 0){
                    totalCount += cartItems[items][item];
                }
            }catch(error){
                console.error('Error accessing cart item:', error);
            }
        }
    }
    return totalCount;
    }

    const updateQuantity = async (itemId, size,quantity)=>{

        let cartData = structuredClone(cartItems);
        cartData[itemId][size] = quantity;
        setCartItems(cartData);
    }

    const getCartAmount = () =>{
    let totalAmount = 0;
    for(const items in cartItems){
      for(const item in cartItems[items]){
        try{
          if(cartItems[items][item] > 0){
            const product = products.find((product)=>product._id === items);
            totalAmount += product.price * cartItems[items][item];
          }
        }catch(error){
            console.error('Error accessing cart item:', error);
        }
      }
    }
    return totalAmount;
  }

    
    useEffect(()=>{
        console.log(cartItems);
    }, [cartItems]);

    // Structuring the value to be provided by the context
    const value = {
        products, currency, delivery_fee, search, showSearch, setShowSearch, setSearch,
        cartItems, addToCart, getCartCount, updateQuantity, navigate, getCartAmount
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;