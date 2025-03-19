import { useMemo } from "react"


export const useSortedPosts = (items,sort) => {
    const sortedPosts = useMemo(() => {
        console.log('функция вызвалась')
        if (sort) { 
          return [...items].sort((a,b) => String(a[sort]).localeCompare(String(b[sort])))
        }
        return items
      }, [sort, items])

      return sortedPosts
}

export const usePosts = (posts,sort,query) => {
    const sortedPosts = useSortedPosts(posts,sort);
    
    const sortedAndSearchedPosts = useMemo(() => { 
        return sortedPosts.filter(post => post.body.toLowerCase().includes(query.toLowerCase()))
      }, [query, sortedPosts])

      return sortedAndSearchedPosts
}