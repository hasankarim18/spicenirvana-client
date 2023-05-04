import { FaSadTear } from "react-icons/fa";
import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {

    const error = useRouteError();

    return (
      <div className="mx-auto h-screen w-screen p-20 flex justify-center items-center ">
        <div>
          <div style={{ fontSize: "150px" }} className="text-green-500 flex justify-center">
            <FaSadTear />
          </div>
          <div className="text-center">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
              <i>{error.statusText || error.message}</i>
            </p>
            <Link to="/" className="btn w-full mt-4" > Back to Home </Link>
          </div>
        </div>
      </div>
    );
};

export default ErrorPage;