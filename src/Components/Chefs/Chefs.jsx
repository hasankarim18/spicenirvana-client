import { Rating } from "@smastrom/react-rating";
import { Link } from "react-router-dom";


const Chefs = ({chef}) => {
  
    const {
      chef_image,
      chef_name,
      number_of_experience,
      likes_count,
      chef_rating,
      chef_id
    } = chef;
    return (
      <div className="mx-auto">
        <div className="card w-full sm:w-96 bg-base-100 shadow-xl">
          <div>
            <img
              className=" sm:h-72 h-auto  "
             
              src={chef_image}
              alt="Shoes"
            />
          </div>
          <div className="card-body">
            <h2 className="card-title">{chef_name}</h2>
            <p>Years of experience: {number_of_experience} </p>
            <p>Likes {likes_count}+ </p>
            <div>
              <div className="flex gap-2 ">
                <span>Rating: </span>
                <Rating
                  style={{ maxWidth: 120 }}
                  value={chef_rating}
                  readOnly
                />
              </div>
            </div>
            <div className="card-actions justify-end">
              <Link to={`/recipes/${chef_id}`} className="btn w-full ">
                View Racipes
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Chefs;