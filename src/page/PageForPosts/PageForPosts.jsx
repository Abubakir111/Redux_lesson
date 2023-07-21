import axios from 'axios'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router'
import style from './PageForPosts.module.css'

const MainPage = () => {
const [ Posts ,usePost] = useState()


const Post = () =>{

    useEffect(() => {
    axios.get('https://dummyjson.com/posts')
    .then(data =>{
         usePost(data.data.posts)
       })
  
  }, [])

}
Post()

  return( <>

     {Posts &&
        Posts.map(post => (
          <div className={style.blockPost} key={post.id}>
            <h1 className={style.PostTitle}>{post.title}</h1>
            <div className={style.PostBody}>{post.body}</div>
          </div>
        ))} 
    </>
  )
}
export default MainPage
