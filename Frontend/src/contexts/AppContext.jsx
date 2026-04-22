import { jobsData } from "@/assets/assets";
import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const AppContext = createContext()

export const AppContextProvider = (props)=>{

    const backendUrl = import.meta.env.VITE_BACKEND_URL
    
    // search filter
    const [searchFilter, setSearchFilter] = useState({
        title:'',
        location:''
    })

    const [isSearched, setIsSearched] = useState(false)
    
    const [showRecruiterLogin, setShowRecruiterLogin] = useState(false)


    // function to fetch jobs
    const [jobs, setJobs]= useState([])

    const [companyToken, setCompanyToken] = useState(null)
    
    const [companyData, setCompanyData] = useState(null)

    const fetchJobs = async()=>{
        setJobs(jobsData)
    }

    //function to fetch company data

    const fetchCompanyData = async (params) => {
        try {

            const {data} = await axios.get(backendUrl + '/api/company/company', {headers:{token:companyToken}})

            if (data.success) {
                setCompanyData(data.company)
                console.log(data);
                
            } else{
                toast.error(data.message)
            }
            
        } catch (error) {
            toast.error(error.message)
        }
    }


    useEffect(()=>{
        fetchJobs()

        const storedCompanyToken = localStorage.getItem('companyToken')

        if (storedCompanyToken) {
            setCompanyToken(storedCompanyToken)
        }
    },[])

    useEffect(()=>{
        if (companyToken) {
            fetchCompanyData()
        }
    },[companyToken])

    const value = {
        setSearchFilter, searchFilter,
        isSearched, setIsSearched,
        jobs, setJobs,
        showRecruiterLogin, setShowRecruiterLogin,
        companyToken, setCompanyToken,
        companyData, setCompanyData,
        backendUrl,



    }
    return (<AppContext.Provider value={value}>
        {props.children}
    </AppContext.Provider>)
}