import React from 'react';
import './Item.css';
const Item = ({name, price, remove, id}) => {
    return (
        <div className='item'>
            <h1>Item</h1>
            <p>Name: {name}</p>
            <p>Price: {price}</p>
            <button onClick={() => remove({id, name, price})}>Remove</button>
        </div>
    )
}

export default Item;