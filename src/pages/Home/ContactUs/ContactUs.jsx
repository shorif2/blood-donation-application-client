import Container from "../../../components/Shared/Container";


const ContactUs = () => {
    return (
        <div>
            <Container>
                <div className="flex w-full my-28">
                    <div className="p-6 w-2/4 rounded-md">
                        <div className="mb-8">
                            <h1 className="my-3 text-4xl font-bold">Contact Us</h1>
                        </div>
                        <form className="w-full">
                            <div className="flex flex-col gap-6">
                               
                                    <div className="flex gap-6">
                                        <input type="text" id="email" placeholder="First Name" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" />
                                        <input type="text" name="email" id="email" placeholder="Last Name" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" />
                                    </div>
                                    <div className="flex gap-6">
                                        <input type="text" name="password" id="password" placeholder="Email" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" />
                                        <input type="text" name="password" id="password" placeholder="Subject" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" />
                                    </div>
                            </div>

                            <div className="mt-6">
                                <textarea placeholder="Message" className="border  rounded-md p-2 w-full h-24 focus:ring focus:ri focus:ri"></textarea>
                                <button className="btn btn-primary btn-block">Submit</button>
                            </div>
                        </form>
                    </div>
                    <div className="w-2/4 my-10 px-16">
                        <h3 className="text-xl font-semibold">Blood Excellence!</h3>
                        <h2 className="text-3xl font-bold py-4">Expanded Blood <br />Donate Services Here </h2>
                        <p className="w-[500px]">
                            On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms
                        </p>
                        <h4 className="text-lg font-medium pt-4 pb-2">
                            Emergency Line: (002) 012612457
                        </h4>
                        <h4 className="text-lg font-medium">
                            Location: Street 68, Mahattan,
                            New York
                        </h4>
                        <h4 className="text-lg font-medium py-2">
                        Mon - Fri: 8:00 am - 7:00 pm
                        </h4>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default ContactUs;