import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
    
    const [ categories, setCategories ] = useState([ 'Pokemon' ]);
    
    const onAddCategory = ( newCategories ) => {
        // setCategories(categories.concat('Valorant'))
        if (categories.includes(newCategories)) return;

        setCategories([newCategories, ...categories])
    }

    return(
        <>
         
            <h1>GifExpertApp</h1>
            
            <AddCategory 
                onNewCategories={ onAddCategory }
            />
     
        
            { categories.map( category => (
                    <GifGrid 
                        key={ category } 
                        category={ category } 
                    />
                )) 
            }

           
    
        </>
    )
}