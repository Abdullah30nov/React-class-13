
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import MediaCard from '../Card/Card'
import axios from 'axios'

const GetData = () => {
const [product,setProduct]=useState([])

const ApiData =async()=>{
   const data =await axios.get('https://fakestoreapi.com/products')
    
    setProduct(data.data)
}
useEffect(()=>{
    ApiData()
},[])

  return (
    <>
    <h1>API DATA</h1>
    {
        product.map((e,i)=>{
            return (
                <div key={i} style={{display:"inline-block"}}>
                <MediaCard id={e.id} image={e.image} title={e.title} desc={e.description} price={e.price} rating={e.rating.count} rate={e.rating.rate}/>
            </div>
            )
        })
    }
    </>
  )
}

export default GetData








