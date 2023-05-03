import { createContext,  useEffect, useState } from "react";
import axios from "axios";

export const DataContext = createContext()

const DataLoadProvider = ({children}) => {
    const [dataLoading, setDataLoading] = useState(true)
    const [chefs, setChefs] = useState([])
      const [banner, setBanner] = useState([]);
      const [generalLoader, setGeneralLoader] = useState(true);
      

        useEffect(() => {
          axios
            .get("https://spicenirvana.vercel.app/general")
            .then((response) => {
              setGeneralLoader(false);
              setBanner(response.data.banner);
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
    
    const data = {
      chefs,
      dataLoading,
      banner,
      generalLoader,
    };


    return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export default DataLoadProvider;