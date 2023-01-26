const {Router} = require('express')

const router= Router()

const products = [
    {
        title: "Zapatilla 1",
        img:"https://grid0.vtexassets.com/arquivos/ids/706612-500-auto?v=1761172031&width=500&height=auto&aspect=true",
        stock: 121,
        description: "",
        price: 100,
        thumbnail: "reultrasecretofads",
        code: "123abdefghy",
        category:"Nike",
        status:true,
        id: 1
      },
    {
        title: "prod2",
        stock: 121,
        img:"https://essential.vtexassets.com/arquivos/ids/694252-1200-auto?v=638094994137900000&width=1200&height=auto&aspect=true",
        description: "",
        price: 100,
        thumbnail: "reultrasecretofads",
        code: "123abdefghy",
        category:"Product",
        status:true,
        id: 2
      },
    {
        title: "prod3",
        stock: 121,
        img:"https://grid0.vtexassets.com/arquivos/ids/705479-500-auto?v=1761155791&width=500&height=auto&aspect=true",
        description: "",
        price: 100,
        thumbnail: "reultrasecretofads",
        code: "123abdefghy",
        category:"Product",
        status:true,
        id: 3
      },
    {
        title: "prod4",
        stock: 121,
        img:"https://grid0.vtexassets.com/arquivos/ids/685144-500-auto?v=1761155085&width=500&height=auto&aspect=true",
        description: "",
        price: 100,
        thumbnail: "reultrasecretofads",
        code: "123abdefghy",
        category:"Product",
        status:true,
        id: 4
      },
] 

router.get('/',(req, res)=>{
    res.render('products.handlebars',{
        products:products[0],
        style:'index.css'
    })
}) 


module.exports =router
