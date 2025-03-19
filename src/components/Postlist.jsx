import React from 'react'
import Item from './Item'

const Postlist = ({items,remove}) => {

if(!items.length) { 
  return (
    <h1 style={{textAlign: 'center'}}>Посты не найдены</h1>
  )
}

  return (
    <>
    <h1 className='title'>Items</h1>
    {items.map(post => 
      <Item remove={remove} name={post.name} price={post.price} id={post.id} key={post.id}/>
    ) }
    </>
  )
}

export default Postlist