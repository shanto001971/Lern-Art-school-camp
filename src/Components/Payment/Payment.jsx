
import useMyClass from '../../Hooks/useMyClass';
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from './CheckOutForm';
import { loadStripe } from '@stripe/stripe-js';
import { useState } from 'react';

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GETWAY);

const Payment = () => {
    const [classCart] = useMyClass();
    const [classPrice, setClassPrice] = useState()
    // console.log(classCart)
    const total = classCart.map(singlePrice => singlePrice.price)
    console.log(classPrice)
    const price = parseFloat(total);
    // console.log(price)

    return (
        <div>
            <Elements stripe={stripePromise}>
                <CheckOutForm key={classCart._id} classCart={classCart} price={price} />
            </Elements>
        </div>
    );
};

export default Payment;