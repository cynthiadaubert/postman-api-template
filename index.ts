import * as express from "express"

const app = express()
const port = process.env.PORT || 3002;
/* instalar --save-dev @types/node si no reconoce process */


app.get("/users", (req, res)=>{
    res.json({
        users:[]
    })
})

app.post("/users",(req,res)=>{
    res.status(201).json({
        message:"ok",
        id: 1234,
    })
})

app.get("users/:userId/products", (req, res)=>{
    res.json({
        products: []
    })
})

app.listen(port, ()=>{
    console.log("express iniciado en ", port)
}) 