import { Link } from 'react-router-dom'
import style from './MainPage.module.css'
import datsJon from '../../../data.json'

const MainPage = () => {

    return (<div className={style.contaier} >
        {
            datsJon.map(elem => (
                <Link className={style.a} to={`/${elem._id}`} state={elem._id} key={elem._id}>
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
    </div>)
}
export default MainPage
