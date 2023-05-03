import { createContext,  useEffect, useState } from "react";
import axios from "axios";

export const DataContext = createContext()

const DataLoadProvider = ({children}) => {
    const [dataLoading, setDataLoading] = useState(true)
    const [chefs, setChefs] = useState([])

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
    };


    return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export default DataLoadProvider;