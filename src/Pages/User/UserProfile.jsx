import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import LazyLoad from "react-lazy-load";


const UserProfile = () => {
    const { user } = useContext(AuthContext);

    const { photoURL, displayName, email } = user;

    console.log(user);
    return (
      <>
        <div style={{ height: "400px" }} className="hero  bg-base-200">
          <div className="hero-content sm:justify-start justify-center w-full flex-col lg:flex-row">
            <LazyLoad threshold={0.95}>
              <img src={photoURL} className="sm:min-w-sm w-full rounded-lg shadow-2xl" />
            </LazyLoad>
            <div>
              <h1 className="text-5xl font-bold">{displayName}</h1>
              <p className="text-orange-400 my-4 font-semibold text-xl ">
                {" "}
                Email: {email}{" "}
              </p>
              <button id="my-modal" className="btn ">
                Edit Profile
              </button>
            </div>
          </div>
          {/* modal */}
          {/* The button to open modal */}
        </div>
        {/* Put this part before </body> tag */}
      </>
    );
};

export default UserProfile;