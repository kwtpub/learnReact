import './App.css'

import Postlist from './components/Postlist'
import { useState,useRef, useMemo, useEffect } from 'react'
import Button from './components/UI/button/Button'
import Input from './components/UI/input/Input'
import PostForm from './components/PostForm'
import Select from './components/UI/select/Select'
import PostFilter from './components/PostFilter'
import Modal from './components/UI/Modal/Modal'
import { usePosts } from './hooks/usePosts'
import PostService from './API/PostService'
import Loader from './components/UI/Loader/Loader'
import { useFetching } from './hooks/useFetching'
function App() {
  const [items, setItems] = useState([])
  
  const [filter, setFilter] = useState({sort: '', query: ''})

  const [modal, setModal] = useState(false)
  
  const [totalPages, setTotalPages] = useState(0)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)
  const sortedAndSearchedPosts = usePosts(items,filter.sort,filter.query);

  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => { 
    const response = await PostService.getAll(limit, page)
      setItems(response.data)
      const totalCount = (response.headers['x-total-count'])
      setTotalPages(getPagesCount(totalCount, limit))
  })

  console.log(totalPages)
  const createPost = (newPost) =>  setItems([...items,newPost])
  





  const removePost = (post) => {
    setItems(items.filter(p => p.id !== post.id))
  }

  useEffect(() => { 
    fetchPosts()
  }, [])
 


  return (
    <>
      <Button onClick={() => setModal(true)}>Добавить пост</Button>
      <Modal visible={modal} setVisible={setModal}>
        <PostForm create={createPost}/>
      </Modal>
      <hr style={{margin: '15px 0'}}/>
      <PostFilter 
      filter={filter} 
      setFilter={setFilter}/>
      {postError &&
       <h1>произошла ошибка ${postError}
       </h1>}
      {isPostsLoading ? 
      <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}><Loader /></div> 
      : 
      <Postlist items={sortedAndSearchedPosts} remove={removePost}/>
    }
    </>
  )
}

export default App