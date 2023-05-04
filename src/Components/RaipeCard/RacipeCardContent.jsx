import { Rating } from "@smastrom/react-rating";
import { useEffect, useState } from "react";
import LazyLoad from "react-lazy-load";
import { toast } from "react-toastify";


const RacipeCardContent = ({
  recipe_name,
  image,
  ingredients,
  method,
  rating,
  id
 // handleFavorite,
 // favorite,
}) => {

  
const [favorite, setfavorite] = useState(false)

//console.log(id)

useEffect(() => {
  const localFavorite = JSON.parse(localStorage.getItem('favorite'))

  if(localFavorite){
     const isFavoriter = localFavorite.find((item) => item === id);
     console.log(isFavoriter);
     if (isFavoriter === id) {
       setfavorite(true);
     }
  }
 

 // console.log(localFavorite);

}, [id])


const notify = ()=> toast('Marked as favoriter')


const handleFavorite = (new_id)=> {

 const favoriter_id_arr = JSON.parse(localStorage.getItem("favorite"));
 if (favoriter_id_arr) {
//  console.log(favoriter_id_arr);
  console.log(new_id);
    const newFavoriteArray = [...favoriter_id_arr, new_id];  
     localStorage.setItem("favorite", JSON.stringify(newFavoriteArray));  
 // const newFavorite_id = 
 } else {
   const id_arr = [id];
   const id_json = JSON.stringify(id_arr);
   localStorage.setItem("favorite", id_json);
 }
 
 notify()
  setfavorite(true)
}

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
          onClick={() => handleFavorite(id)}
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