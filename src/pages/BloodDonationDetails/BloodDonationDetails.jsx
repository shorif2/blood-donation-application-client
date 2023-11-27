import { useParams } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useEffect, useState } from "react";
import Container from "../../components/Shared/Container";


const BloodDonationDetails = () => {
    const params = useParams()
    const axiosPublic = useAxiosPublic()
    const [current, setCurrent] = useState([]);

    const { id } = params

    const {requesterName, requesterEmail,recipientName,hospitalName,recipientDistrict, recipientUpazila,fullAddress, donationDate, donationTime, message, status   } = current;


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
    return (
        <div>
            <h2 className="bg-red-200 py-8 text-2xl font-semibold text-center">
                Blood Donation Request
            </h2>
            <div className="flex w-full justify-around items-center">
                <div>
                <div className="overflow-x-auto">
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
        <td>{donationTime}PM {donationDate} </td>
        
      </tr>
    </tbody>
  </table>
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