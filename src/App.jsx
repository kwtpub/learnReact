import './App.css'

import Postlist from './components/Postlist'
import { useState,useRef, useMemo } from 'react'
import Button from './components/UI/button/Button'
import Input from './components/UI/input/Input'
import PostForm from './components/PostForm'
import Select from './components/UI/select/Select'
import PostFilter from './components/PostFilter'
import Modal from './components/UI/Modal/Modal'
function App() {
  const [items, setItems] = useState([
    {id: 2, name: 'Banana', price: 60},
    {id: 3, name: 'Orange', price: 30},
    {id: 1, name: 'Apple', price: 10},
    {id: 4, name: 'Cherry', price: 100},
  ])
  
  const [filter, setFilter] = useState({sort: '', query: ''})

  const [modal, setModal] = useState(false)

  const createPost = (newPost) => {
    setItems([...items,newPost])
  }

  const sortedPosts = useMemo(() => {
    console.log('функция вызвалась')
    if (filter.sort) { 
      return [...items].sort((a,b) => String(a[filter.sort]).localeCompare(String(b[filter.sort])))
    }
    return items
  }, [filter.sort, items])

  const sortedAndSearchedPosts = useMemo(() => { 
    return sortedPosts.filter(post => post.name.toLowerCase().includes(filter.query.toLowerCase()))
  }, [filter.query, sortedPosts])

  const removePost = (post) => {
    setItems(items.filter(p => p.id !== post.id))
  }


  return (
    <>
      <Button onClick={() => setModal(true)}>Добавить пост</Button>
      <Modal visible={modal} setVisible={setModal}>
        <PostForm create={createPost}/>
      </Modal>
      <hr style={{margin: '15px 0'}}/>
      <PostFilter filter={filter} setFilter={setFilter}/>
     <Postlist items={sortedAndSearchedPosts} remove={removePost}/>
    </>
  )
}

export default App