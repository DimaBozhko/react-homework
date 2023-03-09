import { useContext } from "react";
import { Context } from "../../App";

const ItemContext = () => {

    const value = useContext(Context);
    return <div>{value.name}</div>
    
}

export default ItemContext;
