import React from 'react'
import style from './Form.module.css'
import { useDispatch } from 'react-redux'
import { useRef } from 'react'
import { add } from '../../store/store'

export default function Forma() {
  const dispach = useDispatch()
  const useRefname = useRef()
  const useRefemail = useRef()
  const useRefpassword = useRef()
  const data = {
    name: '',
    email: '',
    password: '',
  }
  const hendelonChange = e => {
    if (e.target.id === 'name') data.name = e.target.value
    if (e.target.id === 'email') data.email = e.target.value
    if (e.target.id === 'password') data.password = e.target.value
  }
  const hendelClik = () => {
    dispach({ type: add, paiload: data })
    useRefname.current.value = ''
    useRefemail.current.value = ''
    useRefpassword.current.value = ''
  }
  return (
    <div className={style.container_wrap}>
      <div className={style.container}>
        <div className={style.content}>
          <div className={style.title_egistration}>Регистрация</div>
          <label className={style.text}>
            Имя:
            <input
              onChange={hendelonChange}
              ref={useRefname}
              id="name"
              type="text"
              placeholder="имя...."
            />
          </label>

          <label className={style.text}>
            email:
            <input
              onChange={hendelonChange}
              ref={useRefemail}
              id="email"
              type="text"
              placeholder="email...."
            />
          </label>

          <label className={style.text}>
            Парол:
            <input
              onChange={hendelonChange}
              ref={useRefpassword}
              id="password"
              type="text"
              placeholder="Парол...."
            />
          </label>

          <button
            onClick={() => hendelClik()}
            className={style.btn_registration}
            type="button"
          >
            регистрация
          </button>
        </div>
      </div>
    </div>
  )
}
