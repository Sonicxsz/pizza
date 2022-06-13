import ItemsList from "../main/items-list/itemsList"
import Header from "../main/header/Header"

function MainPage() {


  return (
    <div>
        <Header />
        <ItemsList filter={"Все пиццы"}/>
    </div>
  )
}

export default MainPage