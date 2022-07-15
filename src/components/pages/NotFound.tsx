import Header from '../main/header/Header'
import st from './notFound.module.scss'
import {NavLink} from 'react-router-dom'
import React from 'react'
const Trash: React.FC = () => {
  return (
    <div>
        <Header showTrash={false}/>
        <div className={st.flex}>
            <div className={st.text}>
            Страница не найдена😕
            <div className={st.margin}>
            <NavLink style={{
                textDecoration: 'none',
                color: 'black'
            }} to='/'>
                Кликни чтобы вернутся на главную
            </NavLink>
            </div>
            </div>
            
        </div>
    </div>
  )
}

export default Trash