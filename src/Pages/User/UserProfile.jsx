import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const UserProfile = () => {
    const { user } = useContext(AuthContext);

    const { photoURL, displayName, email } = user;

    console.log(user);
    return (
      <>
        <div style={{ height: "400px" }} className="hero  bg-base-200">
          <div className="hero-content sm:justify-start justify-center w-full flex-col lg:flex-row">
            <img src={photoURL} className="max-w-sm rounded-lg shadow-2xl" />
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