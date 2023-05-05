import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../../Provider/DataLoadProvider";
import RacipeCardContent from "../RaipeCard/RacipeCardContent";
import { toast } from "react-toastify";

const RecipeDetails = () => {
      const [favorite, setFavorite] = useState(false);
    const params = useParams()

       const notify = () =>toast(` successfully marked as favoriter!`);

    const handleFavorite = () => {
      setFavorite(true);
      notify();
    };

    const { allRecipes, allRecipeLoading} = useContext(DataContext)

    
    if(allRecipeLoading){
        return null 
    }else {
      
        const selectedRacipe = allRecipes.find((racipe) => racipe.id == params.id);
      

        const { recipe_name, image, ingredients, method, rating,id } =
          selectedRacipe;

     return (
       <div>
         <div className="container mx-auto mobile_padding mt-20">
           <RacipeCardContent
             recipe_name={recipe_name}
             image={image}
             ingredients={ingredients}
             method={method}
             rating={rating}
             handleFavorite={handleFavorite}
             favorite={favorite}
             id={id}
           />
         </div>
       </div>
     );
        
    }

    
};

export default RecipeDetails;