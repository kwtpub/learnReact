import React from 'react'
import { useState } from 'react'    
import Input from './UI/input/Input'
import Button from './UI/button/Button'
const PostForm = ({create}) => {
    const [post,setPost] = useState({name: '',price: ''})
    
  
    const addNewPost = (e) => {
      e.preventDefault()
      const newPost = { 
         ...post,  id: Date.now(),
      }
      create(newPost)
      setPost({name: '',price: ''})
    }

  return (
    <form>
    <Input 
    type="text" 
    onChange={e => setPost({...post,name: e.target.value})}
    placeholder='Name'
    value={post.name}
    />
    

    <Input
    onChange={e => setPost({...post, price: e.target.value})}
    value={post.price}
    type="text" 
     placeholder='Price' 
     />
    <Button onClick={ addNewPost }>Add Item</Button>
  </form>
  )
}

export default PostForm