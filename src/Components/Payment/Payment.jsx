
import useMyClass from '../../Hooks/useMyClass';
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from './CheckOutForm';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GETWAY);

const Payment = () => {
const [classCart]=useMyClass();
console.log(classCart)
const total = classCart.reduce((sum, item) => item.price + sum, 0)
const price = parseFloat(total.toFixed(2));
   
    return (
        <div>
            <Elements stripe={stripePromise}>
                <CheckOutForm classCart={classCart} price={price}/>
            </Elements>
        </div>
    );
};

export default Payment;