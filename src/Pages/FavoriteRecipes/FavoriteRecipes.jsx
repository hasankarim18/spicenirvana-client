import { useContext } from "react";
import { DataContext } from "../../Provider/DataLoadProvider";
import Spinner from "../../Components/Utils/Spinner";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";


const FavoriteRecipes = () => {

    const {  allRecipes, allRecipeLoading} = useContext(DataContext)
 //   const [isRemoved, setIsRemoved] = useState(false)

    const isRemoved = false;

    const removeNotify = ()=> toast('Removed from favoriter')

    if(allRecipeLoading){
        return <Spinner />
    }else {
      
         const localFavorite = JSON.parse(localStorage.getItem("favorite"));

        const removeFavorite = (id) => {
          const localState = JSON.parse(localStorage.getItem("favorite"));
         
          let filteredArray = localState.filter((item) => item !== id);
          const filteredArrayJson = JSON.stringify(filteredArray);
          // localStorage.setItem("favorite", filteredArray);
        
          localStorage.setItem("favorite", filteredArrayJson);
         // setIsRemoved(true)
         removeNotify()
        };


        console.log(localFavorite);

         if(localFavorite){
            const favoriteRecipes = allRecipes.filter((recipe) =>
              localFavorite.includes(recipe.id)
            );

          //  setFavoriteRecipesState(favoriteRecipes);

            return (
            <div>
                <div className="container mx-auto mobile_padding py-8">
                <div className="grid xl:grid-cols-4 gap-8 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
                    {
                        favoriteRecipes.map(item => {
                            return (
                              <div key={item.id}>
                                <div className="card w-full  bg-base-100 shadow-xl">
                                  <figure>
                                    <img
                                      className="w-full h-60"
                                      src={item.image}
                                      alt="Shoes"
                                    />
                                  </figure>
                                  <div className="card-body">
                                    <h2 className="card-title">
                                      {item.recipe_name}
                                    </h2>

                                    <div className="flex flex-col gap-4 justify-between">
                                      <Link
                                        to={`/recipe/${item.id}`}
                                        className="btn  border-0"
                                      >
                                        View Details
                                      </Link>
                                      <button
                                        disabled={isRemoved}
                                        onClick={() => removeFavorite(item.id)}
                                        className="btn border-0 bg-rose-400 hover:bg-rose-600 "
                                      >
                                        {isRemoved
                                          ? "Removed"
                                          : "Remove From Favorite"}
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                        })
                    }
                </div>
                </div>
            </div>
            );
         }else {
             return (
               <div>
                 <div className="container mx-auto mobile_padding">
                   <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1"></div>
                 </div>
               </div>
             );
         }

        
    }

   
};

export default FavoriteRecipes;