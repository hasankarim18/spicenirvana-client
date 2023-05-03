import { useContext } from "react";
import { DataContext } from "../../Provider/DataLoadProvider";
import Spinner from "../../Components/Utils/Spinner";
import Chefs from "../../Components/Chefs/Chefs";
import HomeBanner from "../../Components/HomeBanner/HomeBanner";



const Home = () => {
    const { chefs, dataLoading } = useContext(DataContext);
    
    return (
      <div>
        {/* <Spinner /> */}
        <div className="container mobile_padding mx-auto my-12">
          <HomeBanner />
        </div>
        <div className="container mobile_padding mx-auto mt-20">
          <h2 className="text-3xl mb-12 text-center">Our Star Chefs</h2>

          {dataLoading ? (
            <Spinner />
          ) : (
            <div className="grid  grid-cols-1 md:grid-cols-2  xl:grid-cols-3 gap-8 ">
              {chefs.map((chef) => (
                <Chefs key={chef.chef_id} chef={chef} />
              ))}
            </div>
          )}
        </div>
      </div>
    );
};

export default Home;



{/* chefs.map((chef) => {
                return <Chefs chef={chef} key={chef.chef_id} />; */}