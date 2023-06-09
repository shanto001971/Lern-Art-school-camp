
import useMyClass from '../../Hooks/useMyClass';
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from './CheckOutForm';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GETWAY);

const Payment = () => {
const [ClassCart]=useMyClass();
const total = ClassCart.reduce((sum, item) => item.price + sum, 0)
const price = parseFloat(total.toFixed(2));
   
    return (
        <div>
            <Elements stripe={stripePromise}>
                <CheckOutForm cart={ClassCart} price={price}/>
            </Elements>
        </div>
    );
};

export default Payment;