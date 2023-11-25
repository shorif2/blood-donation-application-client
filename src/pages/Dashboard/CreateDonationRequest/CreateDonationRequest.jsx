import useAxiosPublic from "../../../hooks/useAxiosPublic";


const CreateDonationRequest = () => {

    const axiosPublic = useAxiosPublic()


    const handleSubmit = (e)=>{
        e.preventDefault()
        const form = e.target
        const requesterName = form.requesterName.value;
        const requesterEmail = form.requesterEmail.value;
        const recipientName = form.recipientName.value;
        const hospitalName = form.hospitalName.value;
        const recipientDistrict = form.recipientDistrict.value;
        const recipientUpazila = form.recipientUpazila.value;
        const fullAddress = form.fullAddress.value;
        const donationDate = form.donationDate.value;
        const donationTime = form.donationTime.value;
        const message = form.message.value;
        const status = "Pending"


        const donationRequest = {
        requesterName,
        requesterEmail,
        recipientName,
        hospitalName,
        recipientDistrict,
        recipientUpazila,
        fullAddress,
        donationDate,
        donationTime,
        message,
        status,
        }
        console.log(donationRequest);

        axiosPublic.post('/donation-requests', donationRequest)
        .then(result => {
            console.log(result);
        })
        .catch(error => {
            console.log(error);
        })


    }
    return (
        <div>
            <h2 className="text-3xl font-semibold">
            Create Donation Request 
            </h2>

            {/* form */}

            <form onSubmit={handleSubmit} className="px-6  py-6 rounded bg-white mx-auto mt-6">
                <div className="grid gap-4 mb-4 sm:grid-cols-2">
                    <div>
                        <label  className="block mb-2 text-sm font-medium text-gray-900 ">Requester Name</label>
                        <input type="text" name="requesterName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2" placeholder="Requester Name" required/>
                    </div>
                    <div>
                        <label  className="block mb-2 text-sm font-medium text-gray-900 ">Requester Email</label>
                        <input type="text" name="requesterEmail"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 " placeholder="Requester Email" required/>
                    </div>
                    <div>
                        <label  className="block mb-2 text-sm font-medium text-gray-900 ">Recipient Name</label>
                        <input type="text" name="recipientName"className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2    " placeholder="Recipient Name" required/>
                    </div>
                    <div>
                        <label  className="block mb-2 text-sm font-medium text-gray-900 ">Hospital Name</label>
                        <input type="text" name="hospitalName"className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2    " placeholder="Hospital Name" required/>
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 ">Recipient District</label>
                        <select name="recipientDistrict" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2    ">
                            <option defaultValue="">Select Upazila</option>
                            <option value="Offline Home Service">Offline Home Service</option>
                            <option value="Rider Service">Rider Service</option>
                            <option value="Clothing Swap">Clothing Swap</option>
                            <option value="Tool Sharing">Tool Sharing</option>
                            <option value="Pet Sitting">Pet Sitting</option>
                        </select>
                    </div>
                    {/*  */}
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 ">Recipient Upazila</label>
                        <select name="recipientUpazila" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2    ">
                            <option defaultValue="">Select Upazila</option>
                            <option value="Offline Home Service">Offline Home Service</option>
                            <option value="Rider Service">Rider Service</option>
                            <option value="Clothing Swap">Clothing Swap</option>
                            <option value="Tool Sharing">Tool Sharing</option>
                            <option value="Pet Sitting">Pet Sitting</option>
                        </select>
                    </div>
                   
                    <div className="sm:col-span-2">
                        <label  className="block  mb-2 text-sm font-medium text-gray-900 ">Full Address</label>
                        <input type="text" name="fullAddress" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2" placeholder="Full Address" required/>
                    </div>
                    <div>
                        <label  className="block mb-2 text-sm font-medium text-gray-900 ">Donation Date</label>
                        <input type="date" name="donationDate" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2" placeholder="12:00 AM" required/>
                    </div>
                    <div>
                        <label  className="block mb-2 text-sm font-medium text-gray-900 ">Donation Time</label>
                        <input type="time" name="donationTime" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2    " placeholder="12:00 AM" required/>
                    </div>
                    <div className="sm:col-span-2">
                        <label  className="block mb-2 text-sm font-medium text-gray-900 ">Request Message</label>
                        <textarea name="message"  rows="4" className="block p-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500    " placeholder="Request Message"></textarea>                 
                    </div>
                </div>
                <button type="submit" className="bg-red-500 text-white  inline-flex items-center  font-medium rounded-lg text-sm px-5 py-2.5 text-center  ">
                    <svg className="mr-1 -ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path  d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" ></path></svg>
                    Add Service
                </button>
            </form>
            {/* extra form  */}

            <div>
            </div>
        </div>
    );
};

export default CreateDonationRequest;