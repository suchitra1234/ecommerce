import React from 'react';
import "./card.css"
import { useHistory,useParams, useLocation } from 'react-router-dom/cjs/react-router-dom.min';


const CardComponent = ({res,state,setstate,handleDelete}) => {
    const history =useHistory();
    const params = useLocation();






    const AddToCart=()=>{
        // local storage can save only strings
        // res->strings
        const d1 =window.localStorage.cartitems;
        const data = JSON.parse(d1)
        const prv = [...data,res]
        const d = JSON.stringify(prv)
        
       
        
        window.localStorage.setItem("cartitems",d)
        
        
        }


if(params.pathname==="/cart"){

    return (
        <div className="card" >
            <h3>{res.name}</h3>
            <h6>${res.price}</h6>
           <button onClick={()=>handleDelete(res)} >delete</button>
        </div>
    )

}


    return (
        <div  className="card" >
            <h3 onClick={() => history.push(`/product/${res.id}`)} >{res.name}</h3>
            <h6>${res.price}</h6>
            <button onClick={()=>AddToCart()}> Add to Cart</button>
        </div>
    )
}

export default CardComponent
