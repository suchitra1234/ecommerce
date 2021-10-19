import React,{useState} from 'react'
import "./product.css"
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import CardComponent from '../../reuse/card/card';
import axios from "axios"

const Product = () => {
  
    const [state, setstate] = useState([
        
    ])

    //<Link to="/cart">cart</Link>
    //<a href="/cart" >cart</a>
    //<h1 onClick={()=>history.push("/push")} >cart</h1>

   React.useEffect(() => {
       axios.get("https://bc-omega.vercel.app/products").then((res)=>setstate(res.data))
       
   }, [])

    return (
        <div className="product__main">
            <div className="product__content" >
                <h2 className="product_title">Vegetables</h2>
                <div className="cards__content">
                {
                    state.map((res,i)=>  <CardComponent key={i} res={res}/>)
                }
            </div>
            </div>
        </div>
    )
}

export default Product
