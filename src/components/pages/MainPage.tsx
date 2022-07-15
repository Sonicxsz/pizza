import ItemsList from "../main/items-list/itemsList"
import Header from "../main/header/Header"
import Filter from "../main/filters/Filter"

import React from "react"

const MainPage:React.FC = () => {

  return (
    <div style={{maxWidth: '1440px', 
                 margin: '0 auto'}}>
                
        <Header  showTrash={true}/>
        <Filter/>
        <ItemsList/>
    </div>
  )
}

export default MainPage