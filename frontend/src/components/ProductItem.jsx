import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';

const ProductItem = ({ _id, images, name, price }) => {
  const { currency } = useContext(ShopContext);

  // Ensure `image` is an array and has at least one element
  const productImage = Array.isArray(images) && images.length > 0 ? images[0] : "placeholder.jpg";
  // console.log({ _id, images, name, price });

  return (
    <Link className='text-gray-700 cursor-pointer' to={_id ? `/product/${_id}` : '#'}>
      <div className='overflow-hidden'>
        <img className='hover:scale-110 transition ease-in-out' src={productImage} alt={name || "Product"} />
      </div>
      <p className='pt-3 pb-1 text-sm'>{name || "No Name"}</p>
      <p className='text-sm font-medium'>{currency ? currency + price : "Price Not Available"}</p>
    </Link>
  );
};

export default ProductItem;