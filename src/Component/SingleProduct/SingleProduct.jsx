import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
const SingleProduct = () => {
    const navigate=useNavigate()
    const {id}=useParams()
const [product,setProduct]=useState([])
const ApiData =async()=>{
        const data =await axios.get(`https://fakestoreapi.com/products/${id}`)
         setProduct([data.data])
}
useEffect(()=>{
    ApiData()
},[])

  return (
    <>
    <h1>API DATA</h1>
    {
        product.map((e,i)=>{
            // console.log(e);
            return (
                <Card sx={{ maxWidth: 345 }} key={i}>
                <CardMedia
                  sx={{ height: 140 }}
                  image={e.image}
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {e.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                   {e.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button onClick={()=>navigate('/')} variant='contained' size="small">Back</Button>
                </CardActions>
              </Card>
            )
        })
    }
    </>
  )
}

export default SingleProduct
