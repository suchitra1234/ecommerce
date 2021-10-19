const express = require("express");
const cors = require("cors");


const app =express();
app.use(cors())

const products= [
    {
        id:1,
        name:"carrot",
        price:2
       
    },
    {
        id:2,
        name:"Cabbage",
        price:4
       
    },
    {
        id:3,
        name:"Beets",
        price:3
       
    },
    {
        id:4,
        name:"Celery",
        price:2
       
    },
    {
        id:5,
        name:"Egg Plant",
        price:5
       
    },
    {
        id:6,
        name:"Okra",
        price:4
       
    },
    {
        id:7,
        name:"Califlower",
        price:3
       
    },
    {
        id:8,
        name:"Beans",
        price:4
       
    },
    {
        id:9,
        name:"Onions",
        price:5
       
    },
]


app.get('/products',(req,res)=>{
res.json(products)
})

app.get('/product/:id',(req,res)=>{
    const filteItem = products.filter((res)=>+res.id===+req.params.id)

    res.json(filteItem)


})





app.listen(3305)
