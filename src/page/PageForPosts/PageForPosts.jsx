import axios from 'axios'
import { useState, useEffect } from 'react'
import style from './PageForPosts.module.css'
import { useLocation } from 'react-router'

// Шаблон  ссылки
export const dummyApi = axios.create({
  baseURL: 'https://dummyjson.com',
})

export const MainPage = () => {
  const [Posts, usePost] = useState()
  const [datas, useDatas] = useState('')
  const Location = useLocation()
  const newPost = Location.state

  // Фильтрация  поста который  мы  создали локально
  if (newPost === null) {
  } else {
    if (datas === '') useDatas([newPost.resposneState])
    if (datas !== '') {
      if (datas.id === newPost.id) {
        // console.log('sfs')
      }
    }
  }
  //  Запрос  на  все посты
  useEffect(() => {
    dummyApi.get('/posts').then(data => {
      usePost(data.data.posts)
    })
  }, [])
  // Запрос  на   удаления поста
  const deletePost = async id => {
    const resp = await dummyApi.delete(`/posts/${id}`)
    // Статус запроса
    console.log(resp)
    return resp.data
  }

  return (
    <div className={style.conaiter}>
      {/* Рендеринг всех постов */}
      {Posts &&
        Posts.map(post => (
          <div className={style.blockPost} key={post.id}>
            <h1 className={style.PostTitle}>{post.title}</h1>
            <div className={style.PostBody}>{post.body}</div>
            <button onClick={() => deletePost(post.id)}>Удалить </button>
          </div>
        ))}
      {/* Рендеринг поста который  мы  добавили  сами */}
      {datas &&
        datas.map(post => (
          <div className={style.blockPost} key={post.id}>
            <h1 className={style.PostTitle}>{post.title}</h1>
            <div className={style.PostBody}>{post.body}</div>
          </div>
        ))}
    </div>
  )
}
export default MainPage
