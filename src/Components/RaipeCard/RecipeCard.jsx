import { Rating } from "@smastrom/react-rating";
import { useState } from "react";
import { toast } from "react-toastify";


const RecipeCard = ({recipe}) => {
    const [favorite, setFavorite] = useState(false)
    const notify = (name)=> toast(`${name} successfully marked as favoriter!`)

 

    const { recipe_name, image, ingredients, method,rating } = recipe || {}

       const handleFavorite = () => {
         setFavorite(true);
         notify(recipe_name);
       };
    return (
      <div className="card  bg-base-100 shadow-xl w-full">
        <div>
          <figure>
            <img
              className="w-sm mx-w-sm sm:h-96 h-auto  "
              src={image}
              alt="Shoes"
            />
          </figure>
          <div className="h-auto ">
            <div className="card-body">
              <h2 className="card-title">{recipe_name}</h2>
              <div className="flex gap-2">
                <span>Recipe Rating:</span>
                <Rating style={{ maxWidth: 80 }} value={rating} readOnly />{" "}
              </div>
              <div className="flex flex-col xl:flex-row  ">
                <ul className=" w-1/4 list-disc ml-4 ">
                  {ingredients.map((item, i) => (
                    <li key={i}> {item} </li>
                  ))}
                </ul>
                <div className=" w-3/4 xl:border-red-100 xl:border-l ml-2">
                  <p className="pl-2">
                    <strong>Method: </strong> {method}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card-actions  mt-auto justify-center my-auto mb-4  ">
          <button
            onClick={handleFavorite}
            disabled={favorite}
            className="btn bg-green-500 border-0 bg-opacity-90  "
          >
            Make It Favorite
          </button>
        </div>
      </div>
    );
};

export default RecipeCard;