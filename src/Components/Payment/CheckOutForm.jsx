import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import useAuth from "../../Hooks/useAuth";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import './Style.css'


const CheckOutForm = ({ classCart, price }) => {
    // console.log(classCart)
    const { user } = useAuth();
    const stripe = useStripe();
    const elements = useElements();
    const [paymentErr, setPaymentErr] = useState('');
    const [axiosSecure] = useAxiosSecure();
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false);

    useEffect(() => {
       if (price > 0) {
        axiosSecure.post('/create-payment-intent', { price })
        .then(res => {
            console.log(res.data)
            setClientSecret(res.data.clientSecret)
        })
       }
    }, [price,axiosSecure])




    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }

        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            setPaymentErr(error.message)
        } else {
            setPaymentErr('')
            console.log(card)
        }

        setProcessing(true);

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous'
                    },
                },
            },
        );

        

        if (paymentIntent) {
            Swal.fire(
                'Good job!',
                'You clicked the button!',
                'success'
              )
        }
        if (confirmError) {
            console.log(confirmError)
        }
        setProcessing(false);

        if (paymentIntent.status === 'succeeded') {
            const payment = {
                email: user?.email,
                transactionId: paymentIntent.id,
                price,
                date: new Date(),
                Status: 'service pending',
                itemNames: classCart.map(item => item.name)
            }

            axiosSecure.post('/payments', payment)
                .then(res => {
                    // console.log(res.data)
                    if (res.data.insertedId) {
                        Swal.fire(
                            'Good job!',
                            'Payment success!',
                            'success'
                        )
                    }
                })
        }


    }



    return (
        <div className="w-96">
            <form className="" onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',

                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="bg-blue-500" type="submit" disabled={!stripe || processing || !clientSecret}>
                    Pay
                </button>
            </form>
            <div className="text-center">
                {
                    paymentErr && <p className="text-red-500">{paymentErr}</p>
                }



            </div>
        </div>
    );
};

export default CheckOutForm;