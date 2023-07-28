import Forma from './components/Forma/Forma'
import FormData from './components/FormData/FormData'
import style from './App.module.css'

const App = () => {
  return (
    <div className={style.container_wrap}>
      <Forma />
      <FormData />
    </div>
  )
}
export default App
