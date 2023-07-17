import dataJson from '../../../data.json'
import { useLocation } from "react-router"
import style from './SingleItem.module.css'

const SingleItem = () => {
    const location = useLocation()
    {/* Тут я использовал state для получения  данных  id */ }
    const locationId = location.state
    const data = dataJson.filter(dataJson => dataJson._id === locationId)
    return (
        data.map(elem => (
            <div className={style.container}>
                <div key={elem._id}>
                    <div className={style.img_container}>
                        <img className={style.img} src={elem.picture} alt="picture" />
                    </div>
                    <div className={style.title_container}>
                        <div className={style.title}><span className={style.span}>Название:</span> {elem.name}</div>
                        <div className={style.title}><span className={style.span}>Цена:</span>{elem.price}</div>
                        <div className={style.title}><span className={style.span}>Цвет:</span>{elem.color}</div>
                        <div className={style.title}><p className={style.span}>Характеристики:</p>{elem.description}</div>
                    </div>
                </div>
            </div>
        ))
    )
}
export default SingleItem