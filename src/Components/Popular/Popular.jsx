import { useContext } from "react";
import { DataContext } from "../../Provider/DataLoadProvider";
import HomeCards from "../Utils/HomeCards/HomeCards";


const Popular = () => {
   
    const { allRecipes, allRecipeLoading, general } = useContext(DataContext);

    const {popular} = general;

    if(allRecipeLoading){
       return null 
    }else {
      const filtered_recipes = allRecipes.filter((recipe) =>
        popular.some((popular) => popular.recipe_id === recipe.id)
      );

     
      if(filtered_recipes.length > 0){
         return (
           <HomeCards recipe={filtered_recipes} />
         );
      }
    }





   
};

export default Popular;