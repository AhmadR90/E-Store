import { useEffect, useState } from "react";
import { VscError } from "react-icons/vsc";

const cartItems = [];
const Subtotal = 4000;
const tax = Math.round(Subtotal * 0.18);
const shippingCharges = 200;
const total = Subtotal + tax + shippingCharges;
const discount = 400;

const Cart = () => {
  const [cuponCode, setCuponCode] = useState<string>("");
  const [isValidCuponCode, setIsValidCuponCode] = useState<boolean>(false);
  useEffect(() => {
    const timeOutId = setTimeout(() => {
      if (Math.random() > 0.5) {
        setIsValidCuponCode(true);
      } else {
        setIsValidCuponCode(false);
      }
    }, 1000);
  
    return () => {
      clearTimeout(timeOutId);
      setIsValidCuponCode(false);
    };
  }, [cuponCode]);
  
  
  return (
    <div className="cart">
      <main></main>
      <aside>
        <p>Subtotal : Rs.{Subtotal}</p>
        <p>Shipping Charges : Rs.{shippingCharges}</p>
        <p>Tax : Rs.{tax}</p>
        <p>
          Discount : <em> - Rs.{discount}</em>
        </p>
        <b>Total:Rs.{total}</b>
        <input
          type="text"
          value={cuponCode}
          placeholder="Cupon Code"
          onChange={(e) => setCuponCode(e.target.value)}
        />

        {cuponCode && ( isValidCuponCode ? (
          <span className="green">
            Rs.{discount} off using the <code>{cuponCode}</code>
          </span>
        ) : (
          <span className="red">
            Invalid Cupon <VscError />
          </span>
        ))}
      </aside>
    </div>
  );
};

export default Cart;
