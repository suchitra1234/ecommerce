import React,{useState,useEffect} from 'react';
import {useParams} from "react-router-dom"
import CardComponent from "../../reuse/card/card"
import axios from "axios"

const Productdetails = () => {
    const params  = useParams();
    const [singleItem, setsingleItem] = useState({})
   


useEffect(() => {
    axios.get(`http://localhost:3305/product/${params.id}`).then((res)=>setsingleItem(res.data[0]))
 
}, [])


    return (
        <div>
         <CardComponent res={singleItem}/>
        </div>
    )
}

export default Productdetails
