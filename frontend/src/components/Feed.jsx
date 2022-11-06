import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'

import MasonryLayout from './MasonryLayout'
import Spinner from './Spinner'
export default function Feed() {
// Now I will write hard code but I will convert at to a dynamic code later on with backend
  const [loading,setLoading] = useState(false)
  const {categoryId} = useParams()
  if(loading){
   return <Spinner message="we are adding new ideas to your feed" />
  }
  const categories = [
    {id:1,name:'Animals',pin:"pin1"},
    {id:2,name:'Wallapapers',pin:"pin2"},
    {id:3,name:'Photography',pin:"pin3"},
    {id:4,name:'Gaming',pin:"pin4"},
    {id:5,name:'Coding',pin:"pin5"},
    {id:6,name:'Other'},
  ]

  let pin = {};

  useEffect(() => {
    setLoading(true)
    if(categoryId)
    {
      categories.filter((pin) => pin.id == categoryId).map((pin)=> pin)
      setLoading(false)
    }else{
      categories.slice(0,categories.length -1).map((pin)=> pin)
      setLoading(false)
    }
  },[categoryId])
  return (
    <div>
      Feed
    </div>
  )
}
