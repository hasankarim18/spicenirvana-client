import { createContext,  useEffect, useState } from "react";
import axios from "axios";

export const DataContext = createContext()

const DataLoadProvider = ({children}) => {
    const [dataLoading, setDataLoading] = useState(true)
    const [chefs, setChefs] = useState([])
      const [general, setGeneral] = useState([]);
      const [generalLoader, setGeneralLoader] = useState(true);
      const [allRecipes, setAllRecipes] = useState([])
      const [allRecipeLoading, setAllRecipeLoading] = useState(true)
      
   

        useEffect(() => {
          axios
            .get("https://spicenirvana.vercel.app/general")
            .then((response) => {
              setGeneralLoader(false);
              setGeneral(response.data);
            })
            .catch((error) => {
              console.log(error);
            });
        }, []);

  //  console.log(chefs);

    useEffect(() => {
         axios
           .get("https://spicenirvana.vercel.app/chefs")
           .then((response) => {
            
             setDataLoading(false);
             setChefs(response.data);
           })
           .catch((error) => {
             console.log(error);
           });

    }, [])

    // all recipes
    useEffect(() => {
         axios
           .get("https://spicenirvana.vercel.app/recipes")
           .then((response) => {
            
             setAllRecipeLoading(false);
             setAllRecipes(response.data);
           })
           .catch((error) => {
             console.log(error);
           });

    }, [])
    
    const data = {
      chefs,
      dataLoading,
      general,
      generalLoader,
      allRecipes,
      allRecipeLoading
    };


    return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export default DataLoadProvider;