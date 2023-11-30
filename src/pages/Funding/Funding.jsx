import { CheckCircle, Wallet } from "@phosphor-icons/react";
import Container from "../../components/Shared/Container";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Api)

const Funding = () => {


    const handelPay = (e) => {
        e.preventDefault()
        //  const form = e.target

        const donarName = e.target.name.value;
        const donarEmail = e.target.email.value;
        const cardNumber = e.target.card.value;
        const expireDate = e.target.expire.value

        const donarPaymentInfo = {
            donarName, donarEmail, cardNumber, expireDate
        }

        console.log(donarPaymentInfo);

    }
    return (
        <div className="">
            <div className="text-center pt-10 pb-6">
                <h2 className="text-3xl font-semibold pb-10">Payment</h2>
                <p className="font-medium">Choose Payment method below</p>

            </div>
            <div>


                <div className=" flex justify-center px-28 items-center gap-16">
                    <div className="border px-20 py-10 ">
                    <span className=""><CheckCircle color="green" weight="fill" size={24} /></span>
                        <Wallet  size={100} />
                        <p>PAY WITH CREDIT CARD</p>
                    </div>
                    <div className="border px-20 py-10">
                    <span className=""><CheckCircle size={24} /></span>
                        <Wallet size={100} />
                        <p>PAY WITH BKASH</p>
                    </div>
                    <div className="border px-20 py-10">
                    <span className=""><CheckCircle size={24} /></span>
                        <Wallet size={100} />
                        <p>PAY WITH CREDIT CARD</p>
                    </div>
                </div>
                <div>
                    <Container>
                        <div className="flex w-4/5 mx-auto py-16 gap-6">
                            <div className="w-full">
                                <Elements stripe={stripePromise}>
                                    <CheckoutForm></CheckoutForm>
                                </Elements>
                            </div>
                            <form onSubmit={handelPay} className="w-full">


                                <div className="w-full border-b border-gray-900/10 pb-12">
                                    <h2 className="text-2xl font-semibold leading-7 text-gray-900">Personal Information</h2>

                                    <div className="mt-8">
                                        <label className="block text-sm font-medium leading-6 text-gray-900">First name</label>

                                        <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="block py-3 mt-2 w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" disabled />
                                        <label className="block text-sm font-medium leading-6 text-gray-900">First name</label>

                                        <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="block py-3 mt-2 w-full rounded-md border-0  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" disabled />

                                        {/* tow field */}
                                        <div className="flex w-full gap-4">
                                            <div className="w-full">
                                                <label className="block text-sm font-medium leading-6 text-gray-900">First name</label>

                                                <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="block py-3 mt-2 w-full rounded-md border-0  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" disabled />
                                            </div>
                                            <div className="w-full">
                                                <label className="block text-sm font-medium leading-6 text-gray-900">First name</label>

                                                <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="block py-3 mt-2 w-full rounded-md border-0  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" disabled />
                                            </div>

                                        </div>

                                        <label className=" text-sm font-medium leading-6 text-gray-900">Country</label>
                                        <select id="country" name="country" autoComplete="country-name" className="block py-3 mt-2 w-full rounded-md border-0  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600  sm:text-sm sm:leading-6" disabled>
                                            <option>United States</option>
                                            <option>Canada</option>
                                            <option>Mexico</option>
                                        </select>

                                    </div>
                                </div>

                                <div>
                                    <button type='submit' className="btn btn-outline btn-block">Process</button>
                                </div>


                            </form>
                        </div>
                    </Container>
                </div>
            </div>
        </div>
    );
};

export default Funding;