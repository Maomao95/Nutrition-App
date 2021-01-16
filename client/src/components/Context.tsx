import React, {useContext, useState, useEffect} from 'react'
import { useQuery, gql } from '@apollo/client';

const NUTRITION_DATA = gql`
  query {
    desserts {
      id,
      dessert,
      reset,
      visible,
      nutritionInfo {
        calories
        fat
        carb
        protein
      }
    }
  }
`;

const tableHeaders = [
    "calories",
    "fat",
    "carb",
    "protein"
];

interface Nutritiontype {
    [key: string]: number
}


interface DessertType {
    id: number,
    nutritionInfo: Nutritiontype,
    dessert: string,
    reset: boolean,
    visible: boolean
}

interface AllDesserts {
    desserts: DessertType[];
}

interface Sort {
    [key: string] : number
}

export function useNutrition() {
    return useContext(NutritionContext);
}
var varExtractor = new RegExp("return (.*);");
export function getVariableName<TResult>(name: () => TResult) {
    var m = varExtractor.exec(name + "");
    if (m == null) throw new Error("The function does not contain a statement matching 'return variableName;'");
    return m[1];
}


const NutritionContext = React.createContext<any | null>(null);


const Context: React.FC = ({children}) => {
    
    const {loading, error, data, refetch} = useQuery<AllDesserts>(NUTRITION_DATA,{
        pollInterval: 500,
    });
    const [selected, setSelected] = useState([]);
    const [resetState, setResetState] = useState([]);
    const [sort, setSort] = useState<Sort>({index: 0, order: 0});
    const [sortedData, setSortedData] = useState<AllDesserts>();
    const [windowWidth, setwindow] = useState(window.innerWidth);

    const handleResize = () => {
        setwindow(window.innerWidth)
    }

    useEffect(() => {
        
        window.addEventListener('resize', handleResize)
    }, [])


    useEffect(() => {
        if(data !== undefined)
            setSortedData(data);
        if(sort.index !== null && data !==undefined) {
            let newSortedData = [...data.desserts];
            newSortedData.sort((a, b) => {
                return sort.order ? 
                a.nutritionInfo[tableHeaders[sort.index - 1]] - b.nutritionInfo[tableHeaders[sort.index - 1]] : 
                b.nutritionInfo[tableHeaders[sort.index - 1]] - a.nutritionInfo[tableHeaders[sort.index - 1]]
            });
            
            setSortedData({desserts : newSortedData});
        }
        
    }, [sort, data])
    
    
    return (
        <NutritionContext.Provider 
        value ={ {
                selected,
                setSelected,
                loading,
                error,
                data: sortedData ? sortedData : data,
                refetch,
                resetState,
                setResetState,
                sort,
                setSort,
                windowWidth
                }}>
            {children}
        </NutritionContext.Provider>
    )
}

export default Context
