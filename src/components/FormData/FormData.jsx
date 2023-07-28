import React from 'react'
import style from './Formdata.module.css'
import { useSelector } from 'react-redux'

export default function formData() {
  const fromdata = useSelector(state => state)

  return (
    <div className={style.container_wrap}>
      <div className={style.container}>
        <div className={style.title}>имя: {fromdata.name}</div>
        <div className={style.title}>email:{fromdata.email}</div>
        <div className={style.title}>парол:{fromdata.password}</div>
      </div>
    </div>
  )
}
