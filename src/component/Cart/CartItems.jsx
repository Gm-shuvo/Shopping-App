import { Button, Container, Grid, Typography } from '@material-ui/core'
import React from 'react'
import  CartItem  from "./CartItem/CartItem";
import useStyles from './CartItemsStyle'
import { Link } from "react-router-dom";


const CartItems = ({cartItems,handleUpdateCart,handleRemoveCart,handleEmptyCart}) => {
    const classes = useStyles()
   // const isEmpty =  cartItems.line_items.lenght
    
    const IsEmptyCart =()=>{
        return(
            <Typography variant='Subtitle2'>
                Cart is Empty.Please Shop! 
            </Typography>
        )
    }

    const Filledcart=()=>{
        return(
            <Grid container spacing={3} className={classes.container}>
               
               {
                   cartItems.line_items.map((cartItem)=>(
                       <Grid item >
                           <CartItem cartItem={cartItem} handleUpdateCart={handleUpdateCart} handleRemoveCart={handleRemoveCart}/>
                        </Grid>
                   ))
               }
               <div className={classes.cardDetails} >
                    <Typography variant ='subtitle1' >
                      Subtotal:  {cartItems.subtotal.formatted_with_symbol}

                    </Typography>
                    <div>
                        <Button size='large' color='secondary'className={classes.emptyButton} onClick={()=>handleEmptyCart()}>
                            EmptyCard
                        </Button>
                        <Button size='large' color='primary'className={classes.checkoutButton} component= {Link} to= '/checkout'>
                            Checkout
                        </Button>
                    </div>
               </div>
            </Grid> 
        )
    }

  // console.log(cartItems);
    return (
    <>
        <Container className={classes.root}>
            <div className='classes.title'>
                <Typography variant='h4' >
                    Your CardItemsList...
                </Typography>
            </div>
            <div className={classes.devider}></div>
            { !cartItems.total_items ? <IsEmptyCart/> : <Filledcart/>}
        </Container>
       
    </>
)

}

export default CartItems
