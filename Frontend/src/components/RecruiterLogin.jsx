import { assets } from "@/assets/assets";
import { AppContext } from "@/contexts/AppContext";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function RecruiterLogin() {

  const navigate = useNavigate()

  const [state, setState] = useState("Login");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState(false);
  const [isTextDataSubmitted, setIsTextDataSubmitted] = useState(false);

  const { setShowRecruiterLogin, backendUrl, setCompanyToken, setCompanyData } = useContext(AppContext);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (state == "Sign Up" && !isTextDataSubmitted) {
      return setIsTextDataSubmitted(true);
    }

    try {
      if (state === "Login") {
        const {data} = await axios.post(backendUrl + '/api/company/login', {email, password})

        if (data.success) {
          
          setCompanyData(data.company)
          setCompanyToken(data.token)
          localStorage.setItem('companyToken', data.token)
          setShowRecruiterLogin(false)
          navigate('/dashboard')
          
        }
        else{
          toast.error(data.message)
        }

      } else{

        const formData = new FormData()
        formData.append('name', name)
        formData.append('password', password)
        formData.append('email', email)
        formData.append('image', image)

        const {data} = await axios.post(backendUrl + '/api/company/register', formData)

        if (data.success) {
          
          setCompanyData(data.company)
          setCompanyToken(data.token)
          localStorage.setItem('companyToken', data.token)
          setShowRecruiterLogin(false)
          navigate('/dashboard')
        } else{
          toast.error(data.message)
        }

      }
    } catch (error) {
      toast.error(error.message)
    }
  };

  

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center">
      <form
        onSubmit={onSubmitHandler}
        className="relative bg-white p-10 rounded-xl text-slate-500"
      >
        <h1 className="text-center text-2xl text-neutral-700 font-medium">
          Recruiter {state}
        </h1>
        <p className="text-sm">Welcome back! Please sign in to continue</p>
        {state === "Sign Up" && isTextDataSubmitted ? (
          <>
            <div className="flex items-center gap-4 my-10">
              <label htmlFor="image">
                <img
                  className="cursor-pointer w-16 rounded-full 
               hover:scale-105 hover:shadow-md 
               active:scale-90 active:shadow-inner 
               transition-all duration-150"
                  src={image ? URL.createObjectURL(image) : assets.upload_area}
                  alt=""
                />
                <input
                  onChange={(e) => setImage(e.target.files[0])}
                  type="file"
                  id="image"
                  hidden
                />
              </label>
              <p>
                Upload company <br />
                logo{" "}
              </p>
            </div>
          </>
        ) : (
          <>
            {state !== "Login" && (
              <div className="border px-4 py-2 flex items-center gap-2 rounded-full mt-5">
                <img src={assets.person_icon} alt="" />
                <input
                  className="outline-none text-sm"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  type="text"
                  placeholder="Company Name"
                  required
                />
              </div>
            )}

            <div className="border px-4 py-2 flex items-center gap-2 rounded-full mt-5">
              <img src={assets.email_icon} alt="" />
              <input
                className="outline-none text-sm"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                placeholder="Email ID"
                required
              />
            </div>
            <div className="border px-4 py-2 flex items-center gap-2 rounded-full mt-5 mb-5">
              <img src={assets.lock_icon} alt="" />
              <input
                className="outline-none text-sm"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                placeholder="Password"
                required
              />
            </div>
          </>
        )}
        {state === "Login" && (
          <p
            className="text-sm text-blue-600 mt-3 mb-5 text-right cursor-pointer 
               hover:underline hover:text-blue-800 
               active:scale-95 transition-all duration-150"
          >
            Forgot password?
          </p>
        )}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 px-4 rounded-full font-medium
             text-sm flex items-center justify-center
             hover:bg-blue-700 hover:shadow-lg
             active:scale-95 active:bg-blue-800
             transition-all duration-200 cursor-pointer"
        >
          {state === "Login"
            ? "Login"
            : isTextDataSubmitted
              ? "Create Account"
              : "Next"}
        </button>
        {state === "Login" ? (
          <p className="text-sm text-gray-600 text-center mt-4">
            Don't have an account?{" "}
            <span
              onClick={() => setState("Sign Up")}
              className="text-blue-600 font-medium cursor-pointer 
                   hover:underline hover:text-blue-800 
                   active:scale-95 transition duration-150 inline-block"
            >
              Sign Up
            </span>
          </p>
        ) : (
          <p className="text-sm text-gray-600 text-center mt-4">
            Already have an account?{" "}
            <span
              onClick={() => setState("Login")}
              className="text-blue-600 font-medium cursor-pointer 
                   hover:underline hover:text-blue-800 
                   active:scale-95 transition duration-150 inline-block"
            >
              Login
            </span>
          </p>
        )}

        <img
          onClick={(e) => setShowRecruiterLogin(false)}
          className="absolute top-5 right-5 w-3 h-3 cursor-pointer 
             opacity-90 hover:opacity-100 
             hover:scale-110 active:scale-90 
             transition-all duration-150"
          src={assets.cross_icon}
          alt=""
        />
      </form>
    </div>
  );
}

export default RecruiterLogin;
