import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";


const CheckoutForm = () => {
    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('')
    const [transactionId, setTransactionId] = useState('')
    const {user} = useAuth();
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure()
    const totalPrice = '10000'

    useEffect( ()=>{
      if(totalPrice > 0 ){
        axiosSecure.post('/create-payment-intent', {price: totalPrice} )
        .then(res=>{
         console.log(res.data.clientSecret);
         setClientSecret(res.data.clientSecret);
        })
        .catch(err =>{
         console.log(err);
        })
      }
    },[axiosSecure, totalPrice])

    const handleSubmit = async (event)=>{
            event.preventDefault()

            if (!stripe || !elements) {
             
                return;
              }
              const card = elements.getElement(CardElement)
              if (card === null) {
                return;
              }
              const {error, paymentMethod} = await stripe.createPaymentMethod({
                type: 'card',
                card
              })
              if(error){
                console.log('payment error', error);
                setError(error.message)
              }
              else{
                console.log('payment paymentMethod', paymentMethod);
                setError('')
              }

              //confirm payment
              const {paymentIntent, error: confirmError} =  await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'anonymous',
                        name: user?.displayName || 'anonymous'
                    }
                }
              })
              if(confirmError){
                console.log('confirm');
              }
              else{
                console.log('Payment intent', paymentIntent);
                if(paymentIntent.status === 'succeeded'){
                    console.log('transaction id', paymentIntent.id);
                    setTransactionId(paymentIntent.id)

                    const payment = {
                        email: user.email,
                        name: user?.displayName,
                        date: new Date(),
                        Amount: totalPrice,
                        transactionId: paymentIntent.id
                    }
                    await axiosSecure.post('/money-donar-list', payment)
                    .then(res =>{
                        console.log(res);
                        if(res.data?.insertedId){
                            
                            toast.success('Thanks for your Consideration')
                        }
                    })
                    .catch(err=>{
                        console.log(err);
                    })
                }
              }

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
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
      <button className="btn btn-outline my-4" type="submit"
      disabled={!stripe || !clientSecret }
      >
        Pay
      </button>
      <p className="text-red-500">
        {error}
      </p>
      {transactionId && <p className="text-green-500"> Your transactionId: {transactionId}</p>}
            </form>
        </div>
    );
};

export default CheckoutForm;