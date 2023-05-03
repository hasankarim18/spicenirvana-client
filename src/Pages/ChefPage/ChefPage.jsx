import { useContext } from "react";
import { DataContext } from "../../Provider/DataLoadProvider";
import { useParams } from "react-router-dom";
import ChefPageBanner from "../../Components/ChefPageBanner/ChefPageBanner";


const ChefPage = () => {
    const {chefs} = useContext(DataContext);
    const {chef_id} = useParams()
   // console.log(chef_id);

    //console.log(chefs);

    const selectedChef = chefs.find(chef => chef.chef_id === chef_id )

   

    return (
      <div>
        <div className="container mobile_padding mx-auto ">
          <ChefPageBanner chef={selectedChef} />
        </div>
      </div>
    );
};

export default ChefPage;