import { Rating } from "@smastrom/react-rating";
import { Link } from "react-router-dom";


const HomeCards = ({recipe}) => {
    return (
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mt-12">
        {recipe.map((item) => {
          return (
            <div key={item.id} className="card w-full bg-base-100 shadow-xl">
              <figure>
                <img className="w-full sm:h-60 h-auto " src={item.image} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{item.recipe_name}</h2>
                <div className="flex gap-2">
                  <span>Recipe Rating:</span>
                  <Rating
                    style={{ maxWidth: 80 }}
                    value={item.rating}
                    readOnly
                  />{" "}
                </div>
                <div className="card-actions justify-end">
                  <Link to={`/recipe/${item.id}`} className="btn w-full">View Details</Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
};

export default HomeCards;