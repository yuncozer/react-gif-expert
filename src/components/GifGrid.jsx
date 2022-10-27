import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {
    
    const { images, isLoding } = useFetchGifs ( category );
    
    
    return (
        <>
            <h3>{ category }</h3>
            {
                isLoding && <h3>Cargando...</h3>
            }
            <div className="card-grid" >
               {
                images.map( ( img ) => (
                    <GifItem 
                        key={ img.id }
                        { ...img }
                    />
                ))
               } 
            </div>
        </>
    )
}
