import React, { useEffect, useRef } from "react";
import Header from "../main/header/Header";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { removeItems } from "../../store/reducers/trashSlice";
import logo from "../main/trashItem/trashLogo.svg";
import cart from "../main/trashItem/cart.svg";
import item from "../main/trashItem/trashItem.module.scss";
import TrashItem, { TrashType } from "../main/trashItem/TrashItem";
import { RootState } from "../../store/store";
import arrow from "./pp.svg";
import TrashEmpty from "./trashEmpty";

const Trash: React.FC = () => {
  const dispath = useDispatch();
  const items = useSelector<RootState, TrashType[]>(
    (state) => state.trash.items
  );
  const { totalItems, totalPrice }: any = useSelector<RootState>(
    (state) => state.trash
  );

  return (
    <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
      <Header showTrash={false} />
      {items.length > 0 ? (
        <div className={item.wrapper}>
          <div className={item.trashFlex}>
            <div className={item.cartFlex}>
              <img src={logo} alt="trash" />
              <span className={item.trashText}>Корзина</span>
            </div>
            <div className={item.flexFlex}>
              <img src={cart} alt="delete" />
              <span
                onClick={() => {
                  if (window.confirm("Очистить корзину?")) {
                    localStorage.clear();
                    dispath(removeItems());
                  }
                }}
                className={item.clear}
              >
                Очистить корзину
              </span>
            </div>
          </div>
          {items.map((i) => {
            return (
              <TrashItem
                id={i.id}
                size={i.size}
                count={i.count}
                img={i.img}
                price={i.price}
                name={i.name}
                types={i.types}
              />
            );
          })}
          <div className={item.bottom}>
            <div className={item.bottomLeft}>
              Всего пицц: <span>{totalItems}шт.</span>
            </div>
            <div className={item.bottomRigth}>
              Сумма заказа: <span>{totalPrice} ₽</span>
            </div>
          </div>
          <div className={item.bottom}>
            <NavLink to="/" style={{ textDecoration: "none" }}>
              <button className={item.leftBtn}>
                <div>
                  <img src={arrow} alt="" />
                </div>
                <span>Вернуться назад</span>
              </button>
            </NavLink>
            <button className={item.rigthBtn}>Оплатить сейчас</button>
          </div>
        </div>
      ) : (
        <TrashEmpty />
      )}
    </div>
  );
};

export default Trash;
