import { Rating } from "@smastrom/react-rating";
import LazyLoad from "react-lazy-load";


const RacipeCardContent = ({
  recipe_name,
  image,
  ingredients,
  method,
  rating,
  handleFavorite,
  favorite,
}) => {
  return (
    <div className="card  bg-base-100 shadow-xl w-full">
      <div>
        <figure>
          <LazyLoad threshold={0.95}>
            <img
              className="w-sm mx-w-sm sm:h-96 h-auto  "
              src={image}
              alt="Shoes"
            />
          </LazyLoad>
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

export default RacipeCardContent;