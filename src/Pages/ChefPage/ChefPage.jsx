import { useContext } from "react";
import { DataContext } from "../../Provider/DataLoadProvider";
import { useLoaderData, useParams } from "react-router-dom";
import ChefPageBanner from "../../Components/ChefPageBanner/ChefPageBanner";
import RecipeCard from "../../Components/RaipeCard/RecipeCard";


const ChefPage = () => {
    const {chefs} = useContext(DataContext);
    const {chef_id} = useParams()
   // console.log(chef_id);

   const data = useLoaderData()
  

    //console.log(chefs);

    const selectedChef = chefs.find(chef => chef.chef_id === chef_id )

   

    return (
      <div>
        <div className="container mobile_padding mx-auto ">
          <div>
            <h1 className="text-3xl my-4 text-center ">Chef and Recipes </h1>
          </div>
          <ChefPageBanner chef={selectedChef} />
        </div>
        <div className="container mobile_padding mx-auto  mt-12">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 ">
            {data.map((item) => {
              return <RecipeCard key={item.id} recipe={item} />;
            })}
          </div>
        </div>
      </div>
    );
};

export default ChefPage;