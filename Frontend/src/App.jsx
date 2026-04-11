import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ApplyJobs from "./pages/ApplyJobs";
import Applications from "./pages/Applications";
import RecruiterLogin from "./components/RecruiterLogin";
import { AppContext } from "./contexts/AppContext";
import Dashboard from "./pages/Dashboard";
import AddJob from "./pages/AddJob";
import Managejobs from "./pages/Managejobs";
import ViewApplications from "./pages/ViewApplications";
import 'quill/dist/quill.snow.css'

const App = () => {

  const {showRecruiterLogin, setShowRecruiterLogin} = useContext(AppContext)

  return (
    <div>
      {showRecruiterLogin && <RecruiterLogin/>}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/apply-job/:id" element={<ApplyJobs/>} />
        <Route path="/applications" element={<Applications/>} />
        <Route path="/dashboard" element={<Dashboard/>}>
          <Route path="add-job" element={<AddJob/>}/>
          <Route path="manage-jobs" element={<Managejobs/>}/>
          <Route path="view-applications" element={<ViewApplications/>}/>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
