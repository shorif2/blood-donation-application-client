import { Bell } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import ProfileBio from "../../../components/Profile/ProfileBio";
import useAuth from "../../../hooks/useAuth";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';


const Profile = () => {
    const { user, loading } = useAuth()
    const { email } = user;
    const [myBio, setMyBio] = useState({})
    const axiosSecure = useAxiosSecure()


    const { _id, name, avatar, district, upazila, role, status, bloodGroup
    } = myBio || '';

    useEffect(() => {


        axiosSecure.get(`/myInfo/${email}`)
            .then(res => {

                setMyBio(res.data[0]);

            })
            .catch(err => {
                console.log(err);
            })

    }, [axiosSecure, email, loading])

    const [date, setDate] = useState(new Date());

  const onChange = (selectedDate) => {
    setDate(selectedDate);
  };

  const calendarStyles = {
    padding: '10px',
    border: '1px',
    borderRadius: '5px',
  };

    return (
        <div className="flex gap-6 w-full">
            <div className="w-3/4">
                <div className="flex justify-between bg-white p-4">
                    <div className="flex items-end gap-4">
                        <div className="p-1 border shadow-md rounded-xl">
                            <img className="w-36 h-36  bg-gray-200 m-2" src={avatar} />
                        </div>
                        <h2 className="pb-2 text-2xl font-semibold">{name}</h2>
                    </div>
                    <div className="flex items-end gap-3">
                        <Bell size={30} />
                        <Link to={`/dashboard/update-profile/${_id}`}className="bg-black px-6 rounded py-1 text-white font-medium">Edit Profile</Link>
                    </div>
                </div>
                <div className="bg-white mt-6 rounded-lg">
                    <table className="table">
                        {/* head */}
                        <thead className="text-cent">
                            <tr>
                                <th>Name</th>
                                <th>Requester</th>

                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr>

                                <td>Requester Name</td>
                                <td>{'requesterName'}</td>

                            </tr>
                            {/* row 2 */}
                            <tr className="hover">

                                <td>Recipient Name</td>
                                <td>{'recipientName'}</td>

                            </tr>
                            {/* row 3 */}
                            <tr>

                                <td>Hospital Name</td>
                                <td>{'hospitalName'}</td>

                            </tr>
                            <tr>

                                <td>Donation Date and Time</td>
                                <td>{'donationTime'} PM {'donationDate'} </td>

                            </tr>
                        </tbody>

                    </table>

                </div>
                <div className="bg-white mt-6">
                    <div className="">

                        <ProfileBio text1={'Name'} text2={name}>
                        </ProfileBio>
                        <ProfileBio text1={'Email'} text2={email}>
                        </ProfileBio>
                        <ProfileBio text1={'District'} text2={district}>
                        </ProfileBio>
                        <ProfileBio text1={'Upazila'} text2={upazila}>
                        </ProfileBio>
                        <ProfileBio text1={'Role'} text2={role}>
                        </ProfileBio>
                        <ProfileBio text1={'Blood Group'} text2={bloodGroup}>
                        </ProfileBio>

                    </div>
                </div>
            </div>
            {/* second */}
            <div className="w-1/4">
                <div className="bg-white  rounded-lg px-2 py-4">
                    <h2 className="text-center py-4 text-lg font-medium">Donation History</h2>
                    <table className="table ">
                        {/* head */}
                        <thead className="text-cent">
                            <tr>
                                <th>Date</th>
                                <th>Blood</th>

                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr>

                                <td>13 Dec 2020</td>
                                <td>120</td>

                            </tr>
                            {/* row 2 */}
                            <tr className="hover">

                                <td>28 Nov 2020</td>
                                <td>20</td>

                            </tr>
                            {/* row 3 */}
                            <tr>

                                <td>04 Nov 2020</td>
                                <td>40</td>

                            </tr>
                            <tr>

                                <td>15 Oct 2020</td>
                                <td>310 </td>

                            </tr>
                        </tbody>

                    </table>

                </div>
                {/* calender */}
                <div className="bg-white mt-6">
                <h2 className="p-4">My Calendar</h2>
      <Calendar onChange={onChange} className='p-4' value={date} />
                </div>
            </div>
        </div>
    );
};

export default Profile;