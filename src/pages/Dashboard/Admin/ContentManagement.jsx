import { Plus,  } from "@phosphor-icons/react";
import { Link } from "react-router-dom";


const ContentManagement = () => {
    return (
        <div>
            
            <div className="flex justify-between">
            <h2 className="text-2xl font-semibold">
            Content Management
            </h2>
            <div className="flex justify-center gap-2 p-2 rounded items-center bg-red-500 text-white font-bold">
            <Plus weight="bold" size={18} /><Link to="/dashboard/content-management/add-blog">Add Blog</Link>
            </div>
            
            </div>
            <div className="bg-red-200 mt-10 flex justify-between items-center px-4">
            <h2 className=" text-xl font-semibold">Total Blog is 29 </h2>
            {/*  */}

            <select name="select" className="p-2 bg-gray-50 border my-6 border-gray-300 text-sm rounded block">
                            <option defaultValue="">All</option>
                            <option value="Draft">Draft</option>
                            <option value="Published">Published</option>
                        </select>
            </div>
            <div className="bg-white">
            <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th>No</th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
      </tr>
      {/* row 2 */}
      <tr>
        <th>2</th>
        <td>Hart Hagerty</td>
        <td>Desktop Support Technician</td>
        <td>Purple</td>
      </tr>
      {/* row 3 */}
      <tr>
        <th>3</th>
        <td>Brice Swyre</td>
        <td>Tax Accountant</td>
        <td>Red</td>
      </tr>
    </tbody>
  </table>
</div>
            </div>
        </div>
    );
};

export default ContentManagement;