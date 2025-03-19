import './App.css'

import Postlist from './components/Postlist'
import { useState,useRef, useMemo } from 'react'
import Button from './components/UI/button/Button'
import Input from './components/UI/input/Input'
import PostForm from './components/PostForm'
import Select from './components/UI/select/Select'
import PostFilter from './components/PostFilter'
import Modal from './components/UI/Modal/Modal'
import { usePosts } from './hooks/usePosts'
import axios from 'axios'
function App() {
  const [items, setItems] = useState([])
  
  const [filter, setFilter] = useState({sort: '', query: ''})

  const [modal, setModal] = useState(false)

  const sortedAndSearchedPosts = usePosts(items,filter.sort,filter.query);

  const createPost = (newPost) =>  setItems([...items,newPost])
  
  const  fetchPosts = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    setItems(response.data)
  }




  const removePost = (post) => {
    setItems(items.filter(p => p.id !== post.id))
  }
 

  return (
    <>
      <Button onClick={fetchPosts}>Получить посты</Button>
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