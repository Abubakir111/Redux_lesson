// import style from './AddNewPost.module.css'
import axios from 'axios'
import { useNavigate } from 'react-router'
import { useState } from 'react'
import style from './AddNewPost.module.css'

const AddNewPost = () => {
  const navigate = useNavigate()
  const [data, dataState] = useState()

  const addpost = {
    title: '',
    body: '',
    userId: 5,
  }

  const OnChenge = e => {
    const id = e.target.id
    if (id === 'title') addpost.title += e.target.value
    if (id === 'body') addpost.body += e.target.value
  }
  const AddPost = async () => {
    try {
      const resposne = await axios.post(
        'https://dummyjson.com/posts/add',
        addpost
      )
      dataState(resposne)
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className={style.container}>
      <input
        className={style.input}
        id="title"
        onChange={OnChenge}
        placeholder="Заголовок поста"
      />
      <textarea
        className={style.textarea}
        id="body"
        name=""
        cols="50"
        rows="15"
        placeholder="Напишите ваш  пост....."
      ></textarea>
      <button className={style.button} onClick={() => AddPost()} type="button">
        Добавить
      </button>
    </div>
  )
}
export default AddNewPost
