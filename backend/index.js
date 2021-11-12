const express = require("express");
const cors = require("cors");


const app =express();
app.use(cors())

const products= [
    {
        id:1,
        name:"carrot",
        price:2,
        imageurl:"https://source.unsplash.com/random/200x200?carrot"
       
    },
    {
        id:2,
        name:"Cabbage",
        price:4,
        imageurl:"https://source.unsplash.com/random/200x200?cabbage"

       
    },
    {
        id:3,
        name:"Beets",
        price:3,
        imageurl:"https://source.unsplash.com/random/200x200?beetroot"

       
    },
    {
        id:4,
        name:"Celery",
        price:2,
        imageurl:"https://source.unsplash.com/random/200x200?celery"

       
    },
    {
        id:5,
        name:"Egg Plant",
        price:5,
        imageurl:"https://source.unsplash.com/random/200x200?eggplant"

       
    },
    {
        id:6,
        name:"Okra",
        price:4,
        imageurl:"https://source.unsplash.com/random/200x200?okra"

       
    },
    {
        id:7,
        name:"Califlower",
        price:3,
        imageurl:"https://source.unsplash.com/random/200x200?cauliflower"

       
    },
    {
        id:8,
        name:"Beans",
        price:4,
        imageurl:"https://source.unsplash.com/random/200x200?beans"

       
    },
    {
        id:9,
        name:"Onions",
        price:5,
        imageurl:"https://source.unsplash.com/random/200x200?onion"

       
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
