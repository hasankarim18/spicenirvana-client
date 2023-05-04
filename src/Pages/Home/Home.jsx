import { useContext } from "react";
import { DataContext } from "../../Provider/DataLoadProvider";
import Spinner from "../../Components/Utils/Spinner";
import Chefs from "../../Components/Chefs/Chefs";
import HomeBanner from "../../Components/HomeBanner/HomeBanner";
import HomeBannerSkeleton from "../../Components/Utils/HomeBannerSkeleton/HomeBannerSkeleton";
import Popular from "../../Components/Popular/Popular";
import Latest from "../../Components/Latest/Latest";



const Home = () => {
    const { general, generalLoader } = useContext(DataContext);

    const { chefs, dataLoading,  } = useContext(DataContext);
    
    return (
      <div>
        {/* <Spinner /> */}
        <div className="container mobile_padding mx-auto my-12">
          {generalLoader ? (
            <HomeBannerSkeleton />
          ) : (
            <HomeBanner banner={general.banner} />
          )}
        </div>
        <div className="container mobile_padding mx-auto mt-20">
          <h2 className="text-3xl mb-12 text-center md:text-left">
            Our Star <span className="text-green-400"> Chefs </span>
          </h2>

          {dataLoading ? (
            <Spinner />
          ) : (
            <div className="grid justify-center  grid-cols-1 md:grid-cols-2  xl:grid-cols-3 gap-8 ">
              {chefs.map((chef) => (
                <Chefs key={chef.chef_id} chef={chef} />
              ))}
            </div>
          )}
        </div>
        {/* Pupular */}
        <div className="container mobile_padding mx-auto mt-20">
          <h2 className="text-3xl text-center md:text-left">
            Most <span className="text-green-400">Popular</span>
          </h2>
          <div>{generalLoader ? null : <Popular />}</div>
        </div>

        {/* popular */}
        <div className="container mobile_padding mx-auto mt-20">
          <h2 className="text-3xl text-center md:text-left">
            Latest <span className="text-green-400">Collection</span>
          </h2>
          <Latest />
        </div>
      </div>
    );
};

export default Home;

