import { useContext } from "react";
import { DataContext } from "../../Provider/DataLoadProvider";
import HomeCards from "../Utils/HomeCards/HomeCards";

const Latest = () => {
  const { allRecipes, allRecipeLoading } = useContext(DataContext);

  if (allRecipeLoading) {
    return null;
  } else {
    const latest = allRecipes.slice(-4);

    return <HomeCards recipe={latest} />;
  }
};

export default Latest;
