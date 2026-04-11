import { jobsData } from "@/assets/assets";
import { createContext, useEffect, useState } from "react";

export const AppContext = createContext()

export const AppContextProvider = (props)=>{
    
    // search filter
    const [searchFilter, setSearchFilter] = useState({
        title:'',
        location:''
    })

    const [isSearched, setIsSearched] = useState(false)
    
    const [showRecruiterLogin, setShowRecruiterLogin] = useState(false)


    // function to fetch jobs
    const [jobs, setJobs]= useState([])

    const fetchJobs = async()=>{
        setJobs(jobsData)
    }
    useEffect(()=>{
        fetchJobs()
    },[])

    const value = {
        setSearchFilter, searchFilter,
        isSearched, setIsSearched,
        jobs, setJobs,
        showRecruiterLogin, setShowRecruiterLogin,
        


    }
    return (<AppContext.Provider value={value}>
        {props.children}
    </AppContext.Provider>)
}