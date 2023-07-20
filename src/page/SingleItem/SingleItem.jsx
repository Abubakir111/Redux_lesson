import { useLocation } from 'react-router'
import style from './SingleItem.module.css'

const SingleItem = () => {
  const location = useLocation()
  {
    /* Тут я использовал state для получения  данных  id */
  }
  const locationId = location.state
  return (
    <>
      <div className={style.container}>
        <div key={locationId._id}>
          <div className={style.img_container}>
            <img className={style.img} src={locationId.picture} alt="picture" />
          </div>
          <div className={style.title_container}>
            <div className={style.title}>
              <span className={style.span}>Название:</span> {locationId.name}
            </div>
            <div className={style.title}>
              <span className={style.span}>Цена:</span>
              {locationId.price}
            </div>
            <div className={style.title}>
              <span className={style.span}>Цвет:</span>
              {locationId.color}
            </div>
            <div className={style.title}>
              <p className={style.span}>Характеристики:</p>
              {locationId.description}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default SingleItem
