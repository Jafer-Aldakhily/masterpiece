import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import categories from '../utils/data'

import MasonryLayout from './MasonryLayout'
import Spinner from './Spinner'
export default function Feed() {
// Now I will write hard code but I will convert at to a dynamic code later on with backend
const [loading,setLoading] = useState(false)
const [pins,setPins] = useState(null)
  const {categoryId} = useParams()

  useEffect(() => {
        setLoading(true)
        if(categoryId)
        {
          // signle record
          const result = categories.filter(category => category.name == categoryId)
          setPins(result)
          setLoading(false)
        }else{
          // multiple records
          const result = categories.map(category => category)
          setPins(result)
          setLoading(false)
        }
  },[categoryId])


  if(loading) return <Spinner message="we are adding new ideas to your feed" />



 
  return (
    <div>
      {pins && <MasonryLayout pins={pins} />}
    </div>
  )
}
