import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import LazyLoad from "react-lazy-load";


const UserProfile = () => {
  const { user } = useContext(AuthContext);

  // console.log(user);
  // console.log(user.photoURL);
 
  const { photoURL, displayName, email, emailVerified } = user;

  return (
    <>
      <div style={{ height: "550px", marginTop:"-50px"}} className="hero  bg-base-200">
        <div className="hero-content sm:justify-start justify-center w-full flex-col lg:flex-row">
          <LazyLoad threshold={0.95}>
            <img
              style={{ width: "200px", height: "200px" }}
              src={photoURL}
              className=" rounded-lg shadow-2xl"
            />
          </LazyLoad>
          <div>
            <h1 className="text-5xl font-bold">{displayName}</h1>
            <p className="text-orange-400 mt-4 mb-2 font-semibold text-xl ">
              {" "}
              Email: {email}{" "}
            </p>
            <p className=" mb-4">
              {!emailVerified ? (
                <span className="text-red-400"> Email not verified</span>
              ) : (
                <span className="text-green-400">Verified Email</span>
              )}
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