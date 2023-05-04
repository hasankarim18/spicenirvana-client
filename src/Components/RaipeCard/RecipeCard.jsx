import { useState } from "react";
import { toast } from "react-toastify";
import RacipeCardContent from "./RacipeCardContent";


const RecipeCard = ({recipe}) => {
    const [favorite, setFavorite] = useState(false)
    const notify = (name)=> toast(`${name} successfully marked as favoriter!`) 

    const { recipe_name, image, ingredients, method,rating } = recipe || {}

       const handleFavorite = () => {
         setFavorite(true);
         notify(recipe_name);
       };
    return (
      <RacipeCardContent
        recipe_name={recipe_name}
        image={image}
        ingredients={ingredients}
        method={method}
        rating={rating}
        handleFavorite={handleFavorite}
        favorite={favorite}
      />
    );
};

export default RecipeCard;