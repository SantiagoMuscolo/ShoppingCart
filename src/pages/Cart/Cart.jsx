import { useEffect, useState } from "react"
import { useCart } from "../../context/CartContext"
import './Cart.css'


export const Cart = () => {
    const {removeFromCart} = useCart()
    const { total, cartList } = useCart()


    return (
        <main>
            <div className="Container">
                <div>
                    <h2>Cart Items: {cartList.length} / $ {total}</h2>
                </div>
                <div className="cards">
                    {cartList && cartList.map(producto => {
                        return (
                            <div className="Item" key={producto.id}>
                                <img src={producto.img} alt="" />
                                <p>{producto.name}</p>
                                <p>$ {producto.price}</p>
                                <button className="remove" onClick={() =>removeFromCart(producto)}>Remove</button>
                            </div>
                        )
                    })}
                </div>
            </div>
        </main>
    )
}
