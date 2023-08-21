import cart from '../../assets/cartxd.svg'

const CartWidget = () => {
    return(
        <div className="flex items-center space-x-2 bg-slate-300 p-2 rounded-xl cursor-pointer hover:bg-blue-400">
            <img src={cart} alt='cart-widget' className="h-6 w-6 flex-shrink-0" />
            <span className="text-gray-600 font-bold">0</span>
        </div>
    )
}

export default CartWidget