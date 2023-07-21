import axios from 'axios'
import { useState, useEffect } from 'react'
import style from './PageForPosts.module.css'

const MainPage = () => {
  const [Posts, usePost] = useState()

  useEffect(() => {
    axios.get('https://dummyjson.com/posts').then(data => {
      usePost(data.data.posts)
    })
  }, [])

  return (
    <div className={style.conaiter}>
      {Posts &&
        Posts.map(post => (
          <div className={style.blockPost} key={post.id}>
            <h1 className={style.PostTitle}>{post.title}</h1>
            <div className={style.PostBody}>{post.body}</div>
          </div>
        ))}
    </div>
  )
}
export default MainPage
