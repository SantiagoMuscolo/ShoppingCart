import Logo from '../../assets/vans.png'
import { Link } from 'react-router-dom'
import './Header.css'
import { useCart } from '../../context/CartContext'


export const Header = () => {
    const { cartList } = useCart()

    return (
        <header>
            <div className='cabecera'>
                <Link to='/'><img src={Logo} alt="" /></Link>
                <Link to='/'><span className='Brand'>Shopping Cart</span></Link>
            </div>
            <div className='cabecera__buttons'>
                <Link to='/'><button>Home</button></Link>
                <Link to='cart'><button>Cart</button></Link>
            </div>
            <div>
                <span>CART: {cartList.length}</span>
            </div>
        </header>
    )
}
