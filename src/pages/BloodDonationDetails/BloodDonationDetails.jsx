import { useParams } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";

// import Container from "../../components/Shared/Container";


const BloodDonationDetails = () => {
  const {user} = useAuth();
    const params = useParams()
    const axiosPublic = useAxiosPublic()
    const [current, setCurrent] = useState([]);

    const { id } = params

    const {_id, requesterName, requesterEmail,recipientName,hospitalName,recipientDistrict, recipientUpazila,fullAddress, donationDate, donationTime, message, status   } = current;

    useEffect(() => {
        axiosPublic.get(`/update-request/${id}`)
            .then(result => {
                // setRequest(result.data);
                setCurrent(result.data[0]);
            })
            .catch(err => {
                console.log(err);
            })
    }, [id, axiosPublic])


    const handleDonate = (e)=>{

      e.preventDefault()
      const form = e.target
      const donarName = form.name.value
      const donarEmail = form.email.value
      const status = 'Inprogress'
      const info = {
        donarName, donarEmail
      }
      const donarInfo = {
          status,
          info
      } 

      console.log(donarInfo);
      axiosPublic.put(`/donation-info/${id}`,donarInfo)
      .then((result) => {
        console.log(result);
          toast.success('Service update successful')
      })
      .catch((error) => {
          console.error(error);
      });

 


  }
  



    return (
        <div>
            <h2 className="bg-red-200 py-8 text-2xl font-semibold text-center">
                Blood Donation Request
            </h2>
            <div className="flex w-full justify-around items-center">
                <div>
                <div className="overflow-x-auto border rounded p-4">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Name</th>
        <th>Requester</th>
        
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>

        <td>Requester Name</td>
        <td>{requesterName}</td>
        
      </tr>
      {/* row 2 */}
      <tr className="hover">
       
        <td>Recipient Name</td>
        <td>{recipientName}</td>
        
      </tr>
      {/* row 3 */}
      <tr>
       
        <td>Hospital Name</td>
        <td>{hospitalName}</td>
        
      </tr>
      <tr>
       
        <td>Donation Date and Time</td>
        <td>{donationTime} PM {donationDate} </td>
        
      </tr>
    </tbody>
    
  </table>
  
  <div className="py-6">
    <div>

{/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="border-2 hover:bg-green-100 border-green-400 px-4 py-2 rounded" onClick={()=>document.getElementById('my_modal_1').showModal()}>open modal</button>
<dialog id="my_modal_1" className="modal">
  <div className="modal-box">
   <form onSubmit={handleDonate} className="flex flex-col">
   <div className="py-4">
    <p>Donar Name</p>
   <input type="text" name='name' placeholder="name" defaultValue={user.displayName}  className="input input-bordered w-full"disabled />
   <p>Donar email</p>
   <input type="text"name='email' placeholder="email" defaultValue={user.email} className="input input-bordered w-full " disabled/>
   </div>
   <button type='submit' className="btn min-w-min">Confirm</button>
   </form>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
      </div>

  </div>
</div>
                </div>

                <div>
                    <img src="https://img.freepik.com/premium-vector/world-blood-day-concept-vector-flat-illustrations_199064-821.jpg?w=740" alt="" />
                </div>
            </div>
        </div>
    );
};

export default BloodDonationDetails;