import qs from "qs";
import "./itemsList.scss";
import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState, useAppDispatch } from "../../../store/store";
import Item, { Itempizza } from "../item/Item";
import { fetchPizza } from "../../../store/reducers/pizzaSlice";
import { setFilters } from "../../../store/reducers/filter";
import { filters, categories } from "../filters/Filter";
import Skeleton from "../../skeleton";
import { TrashType } from "../trashItem/TrashItem";



const ItemsList: React.FC = () => {
  const filterA: any = useSelector<RootState>(
    (state) => state.filter.activeFilter
  );
  const { searchInput, activeSort }: any = useSelector<RootState>(
    (state) => state.filter
  );

  const items = useSelector<RootState, Itempizza[]>(
    (state) => state.pizzaSlice.items
  );
  const itemsTrash = useSelector<RootState, TrashType[]>(
    (state) => state.trash.items
  );
  const status = useSelector<RootState, string>(
    (state) => state.pizzaSlice.status
  );
  const navigate = useNavigate();
  const dispath = useAppDispatch();

  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      const activeSort = filters.find(
        (obj) => obj.sortType === params.activeSort
      );
      const activeFilter = categories.find((obj) => obj.tag === params.filterA);
      if (activeSort && activeFilter)
        dispath(
          setFilters({
            activeSort,
            activeFilter,
          })
        );
    }
  }, []);

  useEffect(() => {
    const sort: string = activeSort.sortType.replace("-", "");
    const order: string = activeSort.sortType.includes("-") ? "asc" : "desc";
    const tag: string = filterA.tag;
    
      
    dispath(fetchPizza({ sort, order, tag }));
  }, [filterA, activeSort, searchInput]);

  let isMounted = useRef(false);


//Перенос данных с корзины в localstorage
  useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(itemsTrash);
      localStorage.setItem("cart", json);
    }

    isMounted.current = true;
  }, [itemsTrash]);
///////
  useEffect(() => {
    const queryString = qs.stringify({
      filterA: filterA.tag,
      activeSort: activeSort.sortType,
    });

    navigate(`?${queryString}`);
  }, [filterA, activeSort]);

  const filteredItems = items
  .filter(i =>{
    if(i.name.toLocaleLowerCase().includes(searchInput.toLocaleLowerCase())){
      return true
    }
    return false

  })
  .map(i => <Item
    key={i.id}
    id={i.id}
    img={i.img}
    types={i.types}
    size={i.size}
    name={i.name}
    price={i.price}/>
)
  

  /// нужно исправить баг с поиском когда нету символов

  return (
    <div className="pizza__wrapper">
      <div className="checked_filter">{filterA.name}</div>
      <div className="pizza_flex">
        {status == "loading" ? (
          [...new Array(6)].map((i, ind) => {
            return <Skeleton key={ind} />;
          })
        ) : filteredItems.length > 0 ? (
          filteredItems
        ) : (
          <div className="noPizza">Пока нет доступных пицц</div>
        )}
      </div>
    </div>
  );
};

export default ItemsList;
