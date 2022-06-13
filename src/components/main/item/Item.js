import './item.scss'
import {useState} from 'react'

function Item({img, name, price}) {
    let [count, setCount] = useState(null);
    
    const sum = <span>{count}</span>
  return (
    <div className="item_wrapper">
        <div className='img_wrapper'>
            <img src={img} alt="pizza" />
        </div>
        <div className='item_name'>{name}</div>
        <div className='item_settings'>
            <div className='settings_main'>
                <button >тонкое</button>
                <button>традиционное</button>
            </div>
            <div className='settings_size'>
                    <button>26см.</button>
                    <button>30см.</button>
                    <button>40см.</button>
            </div>
        </div>
        <div className='item_footer'>
            <div className='price'>от {price} ₽</div>
            <button onClick={() =>{
                setCount(count += 1)
            }
            } className='item_add' style={count ? {width: '150px'}: null}>+ Добавить {count ? sum : null}</button>
        </div>
    </div>
  )
}

export default Item