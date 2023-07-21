// import style from './AddNewPost.module.css'
import axios from "axios"
import { useNavigate } from "react-router"

const AddNewPost = () => {
  const navigate = useNavigate()
  navigate.state ={ data:'dfdf'}
  console.log(navigate.pathe)
  let title = ''
  let body = ''
  const OnChenge = e => {
    const id = e.target.id
    if (id === 'title') title += e.target.value
    
    if (id === 'body')  body += e.target.value
  }
const AddPost = () =>{
  axios
  .post('https://dummyjson.com/posts/add', {
    title: title,
    body: body,
    userId: 5,
  })
  .then(data => {
    console.log(data.data)
    navigate("/")
  })
  
}
  return (
    <>
      <input id="title" onChange={OnChenge} placeholder="title" />
      <input id="body" onChange={OnChenge} placeholder="body" />
      <button onClick={ ()=>AddPost()} type="button">
        Добавить{' '}
      </button>
    </>
  )
}
export default AddNewPost
