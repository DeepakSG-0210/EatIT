import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center" m-4 p-4>
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 justify-center m-auto">
        <button
          className="p-2 m-4 bg-green-200 text-black rounded-md font-bold text-lg"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cartItems.length === 0 && <h1>Please add items to cart</h1>}
        <ItemList items={cartItems}>({<button>Remove</button>})</ItemList>
      </div>
    </div>
  );
};

export default Cart;
