import { useNavigate } from 'react-router'
import style from './AddNewPost.module.css'
// Сделал импорт шаблон для ссылки запроса
import { dummyApi } from '../PageForPosts/PageForPosts'

const AddNewPost = () => {
  const navigate = useNavigate()
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
      // Применил  шаблон для post запроса
      const resposne = await dummyApi.post('/posts/add', addpost)
      const resposneState = await resposne.data
      navigate('/', { state: { resposneState } })
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
        onChange={OnChenge}
      ></textarea>
      <button className={style.button} onClick={() => AddPost()} type="button">
        Добавить
      </button>
    </div>
  )
}
export default AddNewPost
