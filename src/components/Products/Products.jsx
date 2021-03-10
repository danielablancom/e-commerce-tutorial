import React from "react";
import { Grid } from "@material-ui/core";
import Product from './Product/Product'; 
import useStyles from './styles'; 

const products = [
  { id: 1, name: "Shoes", description: "Music shoes", price: '$5 ', image: 'https://images-na.ssl-images-amazon.com/images/I/61RTP8ntYzL._AC_UY395_.jpg' },
  { id: 2, name: "Macbook", description: "Apple Macbook", price: '$10', image: 'https://ae01.alicdn.com/kf/HTB1prx0NXXXXXavapXXq6xXFXXX5/BGtomato-love-music-art-printing-hot-t-shirts-for-men-brand-new-fashion-designer-personality-shirts.jpg' },
];

const Products = () => {

  const classes = useStyles(); 

  return (
  <main className={classes.content}>
    <div className={classes.toolbar}/>
    <Grid container justify="center" spacing={4}>
      {products.map((product) => (
        <Grid item key={product.id} xs={12} sx={6} md={4} lg={3}>
          <Product product={product}/>
        </Grid>
      ))}
    </Grid>
  </main>
  );
};

export default Products;
