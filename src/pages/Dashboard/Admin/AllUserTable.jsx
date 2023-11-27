import toast from "react-hot-toast";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AllUserTable = ({user}) => {
    const axiosSecure = useAxiosSecure();
    const {_id,email, name, avatar,  role, status } = user;

    const handleUpdateRole = (role)=>{

        const updateRole = {
            role: role
        } 

        axiosSecure.put(`/users/${_id}`, updateRole)
        .then(result =>{
            if(result.data.modifiedCount > 0){
                toast.success(`${name} is ${role} now`)
            }
        })
        .catch(error =>{
            console.log(error);
        })
    }

    const userStatus = (status) =>{

        const currentStatus = status;
        

        if (currentStatus === "Active"){
            const  updateStatus =  { status: 'Block'}
            axiosSecure.put(`/users-status/${_id}`, updateStatus)
            .then(result =>{
                if(result.data.modifiedCount > 0){
                    toast.success(`${name} is block now`)
                }
            })
            .catch(error =>{
                console.log(error);
            })
        }
        else{
            const  updateStatus =  { status: 'Active'}
            axiosSecure.put(`/users-status/${_id}`, updateStatus)
            .then(result =>{
                if(result.data.modifiedCount > 0){
                    toast.success(`${name} is Unblock now`)
                }
            })
            .catch(error =>{
                console.log(error);
            })
        }
        
        
        
    }
    
    return (
        <tbody>
				<tr className="border-b border-opacity-20">
					<td>
					<div className="relative flex-shrink-0">
			<span style={{ backgroundColor: status === 'Active'? 'green': 'red' }} className="absolute bottom-0 left-8 w-4 h-4  border rounded-full"></span>
			<img src={avatar} alt="" className="w-12 h-12 border rounded-full" />
		</div>
					</td>
					<td className="p-3">
						<p>{email}</p>
					</td>
					<td className="p-3">
						<p>{name}</p>
						
					</td>
					<td className="p-3">
						<p>{status}</p>
						
					</td>
					<td className="p-3 text-right">
						
                        <details className="dropdown">
  <summary className="">{role}</summary>
  <ul className="shadow menu bg-white dropdown-content z-[1]">
    <button onClick={()=>handleUpdateRole('Admin')} className="hover:text-green-500 p-1">Admin</button >
    <button onClick={()=>handleUpdateRole('Donar')}  className="hover:text-green-500 p-1">Donar</button >
    <button onClick={()=>handleUpdateRole('Volunteer')}  className="hover:text-green-500 p-1">Volunteer</button >
  </ul>
</details>
					</td>
					<td className="p-3 text-right">
                   <button onClick={()=>userStatus(status)} className="btn btn-sm btn-outline">{status=== "Block"? "Unblock" : "Block"}</button>
					</td>
				</tr>
				
			</tbody>
    );
};

export default AllUserTable;