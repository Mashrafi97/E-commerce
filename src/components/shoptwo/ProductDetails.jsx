import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
    let [singleData,setSingleData] = useState([]) 
    let productID = useParams()
    
    let getData = ()=>{
        axios.get(`https://dummyjson.com/products/${productID.id}`).then((response)=>{
            setSingleData(response.data);
        })
    } 

    useEffect (()=>{
        getData()
    },[])

    console.log(singleData);


  return (
    <div>ProductDetails</div>
  )
}

export default ProductDetails