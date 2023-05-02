import { Link } from "react-router-dom";


const Login = () => {
    const handleSubmit = (event)=> {
        event.preventDefault()
    }
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
                    name="email"
                    type="email"
                    className="w-full p-3 rounded-md"
                  />
                </div>
                <div className="mt-4">
                  <label className="text-xl">Passwrod</label>
                  <input
                    name="password"
                    type="password"
                    className="w-full p-3 rounded-md"
                  />
                </div>
                <div className="mt-4">
                  <input type="submit" value="Login" className="btn" />
                </div>
              </form>
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