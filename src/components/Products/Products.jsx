import React from "react";
import { Grid } from "@material-ui/core";
import Product from './Product/Product'

const products = [
  { id: 1, name: "Shoes", description: "Running shoes", price: '$5 ', image: 'https://assets.ajio.com/medias/sys_master/root/h0e/h57/14092954894366/-473Wx593H-460455972-black-MODEL.jpg' },
  { id: 2, name: "Macbook", description: "Apple macbook", price: '$10', image: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/macbook-pro-13-og-202011?wid=600&hei=315&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1604347427000' },
];

const Products = () => {
  return (
  <main>
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
