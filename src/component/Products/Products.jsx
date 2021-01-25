import React from 'react'
import { Grid } from "@material-ui/core";
import Product from "../Products/product/Product";
const products = [
    {id: 1 , name:'Shoes', description:'Walking Shoes',image:'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-pro-13-og-202011?wid=600&hei=315&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1604347427000',price:'$999'},
    {id: 2, name:'Macbook', description:'Apple Macbook',image:'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-pro-13-og-202011?wid=600&hei=315&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1604347427000',price:'$999'},
    {id: 3, name:'Macbook', description:'Apple Macbook',image:'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-pro-13-og-202011?wid=600&hei=315&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1604347427000',price:'$999'},
    {id: 4, name:'Macbook', description:'Apple Macbook',image:'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-pro-13-og-202011?wid=600&hei=315&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1604347427000',price:'$999'},
    {id: 5, name:'Macbook', description:'Apple Macbook',image:'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-pro-13-og-202011?wid=600&hei=315&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1604347427000',price:'$999'},
    {id: 6, name:'Macbook', description:'Apple Macbook',image:'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-pro-13-og-202011?wid=600&hei=315&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1604347427000',price:'$999'},

]



const Products = () => {
return(
    <main>
        <Grid container justify='center' spacing={4}>
                {
                    products.map((product) =>(
                        <Grid item key ={product.id} xs ={12} sm={6} md={4} lg={3}>
                            <Product product={product}/>
                        </Grid>
                    )
                        
                    )
                }
            </Grid>
    </main>
)

}

export default Products
