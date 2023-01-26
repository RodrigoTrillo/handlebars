const {Router} = require('express')

const router= Router()

const products = [
    {
        title: "prod1",
        stock: 121,
        description: "",
        price: 100,
        thumbnail: "reultrasecretofads",
        code: "123abdefghy",
        category:"Product",
        status:true,
        id: 1
      },
    {
        title: "prod2",
        stock: 121,
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
        product: products,
        style:'index.css'
    })
})


module.exports =router
