import { Link } from "react-router-dom";
import Container from "../../components/Shared/Container";
import InfoCart from "./infoCart";
import { CurrencyCircleDollar } from "@phosphor-icons/react";
import { useEffect } from "react";
import { useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";


const FundingPage = () => {

    const axiosPublic = useAxiosPublic();
    const [donarPerson, setDonarPerson] = useState();

    useEffect(()=>{

        axiosPublic.get('/money-donar-list')
        .then(res =>{
            setDonarPerson(res.data)
        })
        .catch(err=>{
            console.log(err);
        })
    },[axiosPublic])
    return (
        <div>
            <Container>
                <div className="">
                    <div className="grid   px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                        <div className="mr-auto place-self-center lg:col-span-7">
                            <h1 className="max-w-2xl mb-4 text-3xl font-bold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Payments tool for OneBlood Organization </h1>
                            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.</p>
                            <Link to='/donation-process' className="inline-flex items-center border border-gray-300  justify-center px-5 py-3 mr-3 text-base font-medium text-center rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                                Donate Now
                                <CurrencyCircleDollar color="red" size={20} />
                            </Link>
                            <a className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                                Speak to Sales
                            </a>
                        </div>
                        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                            <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="mockup" />
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <div className="flex flex-col justify-center items-center space-y-3">
                    <h2 className="text-3xl font-bold ">Our Donar</h2>
                    <p className="w-2/5">
                    From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.
                    </p>
                    </div>
                </div>
                <div className="bg-white mt-6 rounded-lg w-2/3 mx-auto border mb-16">
                    <table className="table">
                        {/* head */}
                        <thead className="text-cent">
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>TransactionId</th>
                                <th>Date</th>
                                <th>Amount</th>

                            </tr>
                        </thead>
                        {
                            donarPerson?.map(personInfo => <InfoCart key={personInfo._id} personInfo={personInfo} ></InfoCart> )
                        }

                    </table>

                </div>
            </Container>
        </div>
    );
};

export default FundingPage;