import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";

  const errors = {};

const Register = () => {
    const [accept, setAccept] = useState(false)
    const [disable, setDisable] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirm, setConfirm] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirm, setShowConfirm] = useState(false)

    const showPasswordHandler = () => {
      setShowPassword(prev => !prev)
    };
    const showConfirmHandler = () => {
      setShowConfirm((prev) => !prev);
    };
  

    const emailChangeHandler = (event)=> {
        const email = event.target.value
         setEmail(email);
        if(email.includes('@')){           
            errors.emailError=null;
        }else {
           
            errors.emailError = "Please put valid email adderss"
        }        
    }
    const passwrodChangeHandler = (event)=> {
        const password = event.target.value 
         setPassword(password);
        if(password.length < 6){
            errors.password = "Password Cant be less than 6 charecter"
        }else {
            errors.password = null
        }       
    }
    
    const confirmChangeHandler = (event)=> {
        const confirm = event.target.value 
        setConfirm(confirm)
        if(password === confirm){
            errors.confirm = null 
        }else {
            errors.confirm = "Password did not match"
        }
    }

    const handleAccept = (event)=> {
        setAccept(event.target.checked)
    }



     const handleSubmit = (event) => {
       event.preventDefault();
       if(accept === true){
        if(email.includes('@')){
            if(password === confirm){
                console.log('form submit');
                console.log({email}, {password})
            }
        }
       }
     };

     useEffect(() => {
        if(accept && email !== '' && password !== '' && confirm !=='' ){
          if (!errors.password && !errors.emailError && !errors.confirm){
             setDisable(true);
          }else {            
            setDisable(false);
          }
           
        }else {          
            setDisable(false)
        }
       
     }, [email, password, confirm, accept])
     
   //  console.log(accept);

    return (
      <div>
        <div className="container mx-auto mobile_padding">
          <div className="sm:p-4 md:p-6">
            <h1 className="text-4xl  text-center mb-4">Please Register</h1>
            <div className="bg-gray-100 rounded-lg w-full sm:3/4 md:w-1/2 mx-auto">
              <form onSubmit={handleSubmit} className="p-4  w-full">
                <div>
                  <label className="text-xl">Name</label>
                  <input
                    name="name"
                    type="text"
                    className="w-full mb-4 p-3 rounded-md"
                  />
                </div>
                {/* email */}
                <div>
                  <label className="text-xl">
                    Email <span className="text-red-400">*</span>
                  </label>
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
                {/* password */}
                <div className="mt-4">
                  <label className="text-xl">
                    Passwrod <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <input
                      value={password}
                      onChange={passwrodChangeHandler}
                      name="password"
                      type={!showPassword ? "password" : "text"}
                      className="w-full p-3 rounded-md"
                    />
                    <span
                      onClick={showPasswordHandler}
                      className="absolute top-3 right-0 cursor-pointer"
                    >
                      {!showPassword ? (
                        <EyeIcon className="w-6 h-6  " />
                      ) : (
                        <EyeSlashIcon className="w-6 h-6  " />
                      )}
                    </span>
                  </div>
                  <p>
                    {errors.password && (
                      <span className="text-red-400 ml-2">
                        {errors.password}
                      </span>
                    )}
                  </p>
                </div>
                {/* confirm */}
                <div className="mt-4">
                  <label className="text-xl">
                    Confirm Passwrod <span className="text-red-400">*</span>{" "}
                  </label>
                  <div className="relative">
                    <input
                      value={confirm}
                      onChange={confirmChangeHandler}
                      name="password"
                      type={!showConfirm ? "password" : "text"}
                      className="w-full p-3 rounded-md"
                    />
                    <span
                      onClick={showConfirmHandler}
                      className="absolute top-3 right-0 cursor-pointer"
                    >
                      {!showConfirm ? (
                        <EyeIcon className="w-6 h-6  " />
                      ) : (
                        <EyeSlashIcon className="w-6 h-6  " />
                      )}
                    </span>
                  </div>
                  <p>
                    {errors.confirm && (
                      <span className="text-red-400 ml-2">
                        {errors.confirm}
                      </span>
                    )}
                  </p>
                </div>
                <div className="mt-4">
                  <label className="text-xl">Photo Url</label>
                  <input
                    name="password"
                    type="password"
                    className="w-full p-3 rounded-md"
                  />
                </div>
                <div onClick={handleAccept} className="mt-4">
                  <input
                    id="accept"
                    name="accept"
                    type="checkbox"
                    className=" cursor-pointer p-3 w-4 rounded-md"
                  />
                  <label
                    htmlFor="accept"
                    className=" cursor-pointer ml-2 text-xl"
                  >
                    Accept terms and condition
                  </label>
                </div>
                <div className="mt-4">
                  <button
                    disabled={!disable}
                    type="submit"
                    value="Register"
                    className="btn"
                  >
                    Register
                  </button>
                </div>
              </form>
              <p className="p-4 pt-0">
                Already have an account?{" "}
                <Link className="underline text-primary" to="/login">
                  {" "}
                  Login.{" "}
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Register;