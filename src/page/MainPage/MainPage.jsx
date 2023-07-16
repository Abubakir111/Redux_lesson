import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import style from './MainPage.module.css'
const MainPage = () => {
    const [datas, useData] = useState();
    console.log(datas)
    useEffect(() => {
        axios.get('../../../data.json').then(response => useData(response.data))
    }, [])
    return <div className={style.contaier} >
        {
            datas && datas.map(elem => (
                <Link className={style.a} to={`/${elem._id}`}>
                    <div className={style.card} key={elem.id}>
                        <div className={style.card__inner}>
                            <img className={style.img} src={elem.picture} alt="" srcset="" />
                            <div className={style.price}> <span className={style.span}>цена:</span>{elem.price}</div>
                            <div className={style.name}> <p>Характеристики:</p>{elem.description}</div>

                        </div>
                    </div>
                </Link>)
            )
        }
    </div>
}
export default MainPage
