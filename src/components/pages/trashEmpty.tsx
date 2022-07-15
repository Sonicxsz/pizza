import React from "react";
import empty from "../../assets/img/empty.png";
import item from "./notFound.module.scss";
import { NavLink } from "react-router-dom";
const TrashEmpty: React.FC = () => {
  return (
    <div className={item.wrap}>
      <div className={item.emptyH1}>
        Корзина пустая <span>😕</span>
      </div>
      <div className={item.emptyH2}>
        Вероятней всего, вы не заказывали ещё пиццу. Для того, чтобы заказать
        пиццу, перейди на главную страницу.
      </div>
      <div className={item.emptyImg}>
        <img src={empty} alt="emp" />
      </div>
      <NavLink style={{ textDecoration: "none" }} to="/">
        <button className={item.emptyBtn}>Вернуться назад</button>
      </NavLink>
    </div>
  );
};

export default TrashEmpty;
