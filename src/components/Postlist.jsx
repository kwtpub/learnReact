
import Item from './Item'
import React,{useRef} from "react";
import './Postlist.css'
import { TransitionGroup, CSSTransition } from 'react-transition-group'


const Postlist = ({items, remove}) => {
  const nodeRef = useRef({});
  if(!items.length) { 
    return (
      <h1 style={{textAlign: 'center'}}>Посты не найдены</h1>
    )
  }

  return (
    <>
      <h1 className='title'>Items</h1>
      <TransitionGroup>

        {items.map(post => {
        if(!nodeRef.current[post.id]) { 
          nodeRef.current[post.id] = React.createRef();
        }
        return (
          <CSSTransition
            key={post.id}
            timeout={500}
            classNames="post"
            nodeRef={nodeRef.current[post.id]}
          >
            <div className="post-item" ref={nodeRef.current[post.id]}>
              <Item remove={remove} name={post.body} price={post.price} id={post.id}/>
            </div>
          </CSSTransition> )
        })}
      </TransitionGroup>
      
    </>
  )
}

export default Postlist