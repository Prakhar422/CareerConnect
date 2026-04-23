import { manageJobsData } from '@/assets/assets'
import React, { useContext, useEffect, useState } from 'react'
import dayjs from "dayjs";
import { useNavigate } from 'react-router-dom';
import { AppContext } from '@/contexts/AppContext';
import { toast } from 'react-toastify';
import axios from 'axios';

function Managejobs() {

    const navigate = useNavigate()

    const [jobs, setJobs] = useState([])

    const {backendUrl, companyToken} = useContext(AppContext)

    //function to fetch company job applicaiton data
    const fetchCompanyJobs = async () => {
      
      try {
        const {data} = await axios.get(backendUrl + '/api/company/list-jobs',
          {headers:{token:companyToken}}
        )

        if (data.success) {
          setJobs([...data.jobsData].reverse())
          console.log(data.jobsData);
          
        } else{
          toast.error(data.message)
        }

      } catch (error) {
        toast.error(error.message)
      }
    }

    //function to change job visibility
    const changeJobVisibility = async (id) => {
      
      try {
        
        const {data} = await axios.post(backendUrl + '/api/company/change-visibility',
          {
            id
          },
          {
            headers:{token:companyToken}
          }
        )

        if (data.success) {
          toast.success(data.message)
          fetchCompanyJobs()
        } else{
          toast.error(data.message)
        }

      } catch (error) {
        toast.error(error.message)
      }
    }

    useEffect(()=>{
      if (companyToken) {
        fetchCompanyJobs()
      }
    },[companyToken])

  return (
   <div className="container mx-auto p-6 max-w-6xl">

  <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">

    <div className="overflow-x-auto">
      <table className="min-w-full text-sm">

        {/* Header */}
        <thead className="bg-gray-50 text-gray-600 uppercase text-xs">
          <tr>
            <th className="py-3 px-4 text-left max-sm:hidden">#</th>
            <th className="py-3 px-4 text-left">Job Title</th>
            <th className="py-3 px-4 text-left max-sm:hidden">Date</th>
            <th className="py-3 px-4 text-left max-sm:hidden">Location</th>
            <th className="py-3 px-4 text-center">Applicants</th>
            <th className="py-3 px-4 text-center">Visible</th>
          </tr>
        </thead>

        {/* Body */}
        <tbody>
          {jobs.map((job, index) => (
            <tr
              key={job._id}
              className="border-t hover:bg-gray-50 transition"
            >
              <td className="py-3 px-4 max-sm:hidden text-gray-500">
                {index + 1}
              </td>

              <td className="py-3 px-4 font-medium text-gray-800">
                {job.title}
              </td>

              <td className="py-3 px-4 max-sm:hidden text-gray-500">
                {dayjs(job.date).format("MMM D, YYYY")}
              </td>

              <td className="py-3 px-4 max-sm:hidden text-gray-500">
                {job.location}
              </td>

              <td className="py-3 px-4 text-center font-semibold text-blue-600">
                {job.applicants}
              </td>

              <td className="py-3 px-4 text-center">
                <input
                onChange={()=>changeJobVisibility(job._id)}
                  type="checkbox"
                  className="w-5 h-5 accent-blue-600 cursor-pointer"
                  checked={job.visible}
                />
              </td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>

  </div>

  {/* Button */}
  <div className="mt-6 flex justify-end">
    <button
      onClick={() => navigate('/dashboard/add-job')}
      className="cursor-pointer bg-black text-white py-2.5 px-5 rounded-lg font-medium
                 hover:bg-gray-800 hover:shadow-md
                 active:scale-95 transition-all duration-200"
    >
      + Add New Job
    </button>
  </div>

</div>
  )
}

export default Managejobs
