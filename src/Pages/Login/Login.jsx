import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-toastify";
import { FaGithub, FaGoogle } from "react-icons/fa";


const errors = {}

const Login = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [loginError, setLoginError] = useState(null)
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     const [disable, setDisable] = useState(false)
     const location = useLocation()
     const navigate = useNavigate()

     const loginToast = ()=> toast('Login Successful')

      
     const { signInWithPassword, signInWithGoogle, signInWithWithGithub } =
       useContext(AuthContext);

     let from = location.state?.from?.pathname || "/";

     const emailChangeHandler = (event) => {
       const email = event.target.value;
       setEmail(email);
       if (email.includes("@")) {
         errors.emailError = null;
       } else {
         errors.emailError = "Please put valid email adderss";
       }
     };
     const passwrodChangeHandler = (event) => {
       const password = event.target.value;
       setPassword(password);
       if (password.length < 6) {
         errors.password = "Password Cant be less than 6 charecter";
       } else {
         errors.password = null;
       }
     };

     const showPasswordHandler = () => {
       setShowPassword((prev) => !prev);
     };
    //  handle submit
    const handleSubmit = (event)=> {
        event.preventDefault()
         if (email.includes("@") && password.length > 5){
          signInWithPassword(email, password)
          .then(() => {        
             setLoginError(null)
             loginToast()
              navigate(from)
          })
          .catch((error)=> {
          //   const errorCode = error.code;
             const errorMessage = error.message;
           //  console.log({errorCode});
            // console.log({errorMessage});
            setLoginError(errorMessage)
            const notify = ()=> toast(errorMessage)
            notify()
          })
          
         }else {
           setDisable(false)
         }
    }

    /**google sign in handler */
    const googleSignInHandler = ()=> {
       signInWithGoogle()
         .then(() => {
          navigate('/')
         })
         .catch((error) => {
          const errorMessage = error.message;
          setLoginError(errorMessage);
         });
    }


    /** github sign in handler */

    const gitSignInHandler = ()=> {
       signInWithWithGithub()
       .then(()=> {
        navigate('/')
       })
       .catch((error)=> {
         const errorMessage = error.message;
         setLoginError(errorMessage)
       })
    }
 


 

    useEffect(() => {
      if (email.includes("@") && password.length > 5){
        setDisable(true)
      }else {
        setDisable(false)
      }
    }, [email, password])
    
    return (
      <div>
        <div className="container mx-auto mobile_padding">
          <div className="sm:p-4 md:p-6">
            <h1 className="text-4xl  text-center mb-4">Please Login</h1>
            <div className="bg-gray-100 rounded-lg w-full sm:3/4 md:w-1/2 mx-auto">
              <form onSubmit={handleSubmit} className="p-4  w-full">
                <div>
                  <label className="text-xl">Email</label>
                  <input
                    value={email}
                    onChange={emailChangeHandler}
                    name="email"
                    type="email"
                    className="w-full p-3 rounded-md"
                  />
                  <p>
                    {errors.emailError && (
                      <span className="text-red-400 ml-2">
                        {errors.emailError}
                      </span>
                    )}
                  </p>
                </div>
                <div className="mt-4 relative">
                  <label className="text-xl">Passwrod</label>
                  <input
                    value={password}
                    onChange={passwrodChangeHandler}
                    name="password"
                    type={!showPassword ? "password" : "text"}
                    className="w-full p-3 rounded-md"
                  />
                  <span
                    onClick={showPasswordHandler}
                    className="absolute top-10 right-0 cursor-pointer"
                  >
                    {!showPassword ? (
                      <EyeIcon className="w-6 h-6  " />
                    ) : (
                      <EyeSlashIcon className="w-6 h-6  " />
                    )}
                  </span>
                  <p>
                    {errors.password && (
                      <span className="text-red-400 ml-2">
                        {errors.password}
                      </span>
                    )}
                  </p>
                </div>
                <div className="mt-4">
                  <button
                    disabled={!disable}
                    type="submit"
                    value="Login"
                    className="btn"
                  >
                    Login
                  </button>
                </div>
                <p className="text-red-400">{loginError && loginError}</p>
              </form>
              <div className="px-4 my-4 flex gap-4 justify-between flex-wrap ">
                <div
                  onClick={googleSignInHandler}
                  className="btn w-full text-2xl text-white"
                >
                  <span className="mr-2 text-xl capitalize  ">
                    Sign in with
                  </span>{" "}
                  <FaGoogle />
                </div>
                <div
                  onClick={gitSignInHandler}
                  className="btn w-full text-2xl text-white"
                >
                  <span className="mr-2 text-xl capitalize  ">
                    Sign in with
                  </span>{" "}
                  <FaGithub />
                </div>
              </div>
              <p className="p-4 pt-0">
                Do not have an account?{" "}
                <Link className="underline text-primary" to="/register">
                  {" "}
                  Register.{" "}
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;