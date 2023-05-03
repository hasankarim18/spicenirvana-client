import { useContext } from "react";
import { DataContext } from "../../Provider/DataLoadProvider";
import Spinner from "../Utils/Spinner";
import { Rating } from "@smastrom/react-rating";
import { AuthContext } from "../../Provider/AuthProvider";

const ChefPageBanner = ({ chef }) => {
 const {dataLoading}  = useContext(DataContext)
 const {loading}  = useContext(AuthContext)
  
  const {
    chef_name,
    chef_image,
    short_bio,
    number_of_experience,
    chef_rating,
    number_of_recipes,
    likes_count,
  } = chef || {}

 

  if(loading){
   // console.log('auth loading');
    return null
  }else {   
     if (dataLoading) {
       return <Spinner />;
     } else {
       return (
         <div style={{ minHeight: "400px" }} className="hero  bg-base-200">
           <div className="hero-content flex-col lg:flex-row">
             <img  src={chef_image} className="w-max-sm rounded-lg shadow-2xl" />
             <div>
               <h1 className="text-3xl font-bold  ">{chef_name}</h1>
               <hr />
               <ul className="mt-4 list-disc pl-8 font-semibold ">
                 <li className="mb-2">
                   <strong>Short Biography:</strong> {short_bio}
                 </li>
                 <li className="mb-2"> {likes_count}+ likes </li>
                 <li className="mb-2">{number_of_recipes}+ recipes</li>
                 <li className="mb-2">
                   {number_of_experience}+ years experience.
                 </li>
                 <li className="mb-2  ">
                   <div className="flex gap-2 ">
                     <span>Rating: </span>
                     <Rating
                       style={{ maxWidth: 120 }}
                       value={chef_rating}
                       readOnly
                     />
                   </div>
                 </li>
               </ul>
             </div>
           </div>
         </div>
       );
     }
  }

  
};

export default ChefPageBanner;
