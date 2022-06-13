import Item from "../item/Item"
import cheese from '../../../assets/img/cheese.png'
import asian from '../../../assets/img/asian.png'
import onlychez from '../../../assets/img/onlychez.png'
import chicken from '../../../assets/img/chicken.png'

import './itemsList.scss'

function ItemsList({filter}) {
  return (
 
    <div className="pizza__wrapper">
    <div className="checked_filter">{filter}</div>
        <div className="pizza_flex">
        <Item img={cheese} name={'Чизбургер-пицца'} price={395}/>
        <Item img={onlychez} name={'Сырная'} price={450}/>
        <Item img={asian} name={'Креветки по-азиатски'} price={290}/>
        <Item img={chicken} name={'Сырный цыпленек'} price={385}/>
        <Item img={cheese} name={'Чизбургер-пицца'} price={395}/>
        <Item img={onlychez} name={'Сырная'} price={450}/>
        <Item img={asian} name={'Креветки по-азиатски'} price={290}/>
        <Item img={chicken} name={'Сырный цыпленек'} price={385}/>
        </div>
    </div>
   
  )
}

export default ItemsList