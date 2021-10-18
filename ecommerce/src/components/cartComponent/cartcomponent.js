import React from 'react'
import CardComponent from '../../reuse/card/card';

const Cartcomponent = () => {
    const [state,setState]=React.useState([]);
    const [total,setTotal]=React.useState("");



// React.useEffect(() => {
//    const d = window.localStorage.cartitems
//   const parseddata = JSON.parse(d);
//   setState(parseddata)
// }, [])


React.useEffect(()=>{
    if(window.localStorage.cartitems){
        const d =window.localStorage.cartitems;
        const data = JSON.parse(d)
        setState(data)

    }
 
},[])


const handleState=(arg)=>{
setState(arg)
}






const handleDelete=(arg)=>{

const d2 =window.localStorage.cartitems;
const data = JSON.parse(d2)
const filteritems = data.filter((re,i)=>re.id!==arg.id)


const di = JSON.stringify(filteritems)

setState(filteritems)

window.localStorage.setItem("cartitems",di)



if(total&&state.length===1){
   setTotal(0)
}
}

React.useEffect(()=>{

const array1 =  state.map((res)=>res.price)
const reducer = (previousValue, currentValue) => previousValue + currentValue;


if(array1.length>0){
// 1 + 2 + 3 + 4
setTotal(array1.reduce(reducer));
}

},[state])






    return (
        <div style={{display:"flex",flexWrap:"wrap"}}>
            {
                state.map((res,i)=><CardComponent key={i} handleDelete={handleDelete} res={res} state={state} setstate={handleState}  />)
            }
           {/* <CardComponent res={state}/> */}
           <div>
               <h2>Total:- ${total}  </h2>
           </div>
        </div>
    )
}

export default Cartcomponent
