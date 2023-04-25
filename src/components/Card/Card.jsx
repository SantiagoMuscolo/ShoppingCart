import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import './Card.css'
import { useEffect, useState } from 'react'

export const Card = ({ product }) => {
const { addToCart, cartList, removeFromCart } = useCart()
const [isInCart, setIsInCart] = useState(false)

const handleAdd = () => {
    addToCart(product)
}

useEffect(() => {
    const productIsInCart = cartList.find(cartItem => cartItem.id === product.id)

    if(productIsInCart){
        setIsInCart(true)
    }else{
        setIsInCart(false)
    }

}, [cartList])

    return (
        <div className="card">
            <img src={product.img} alt="" />
            <h4>{product.name}</h4>
            <p>$ {product.price}</p>
            {isInCart ? <Link to='cart'><button className='remove' onClick={() => removeFromCart(product)}>Remove</button></Link> : (<Link to='cart'><button onClick={handleAdd}>Add To Cart</button></Link>)}
        </div>
    )
}
