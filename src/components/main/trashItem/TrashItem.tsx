import React from "react";
import item from "./trashItem.module.scss";
import { useDispatch } from "react-redux";
import {
  itemPlus,
  itemMinus,
  removeOneItem,
} from "../../../store/reducers/trashSlice";

export type TrashType = {
  name: string;
  types: string;
  img: string;
  count: number;
  size: number;
  price: number;
  id: string;
};

const TrashItem: React.FC<TrashType> = ({
  name,
  types,
  img,
  count,
  size,
  price,
  id,
}) => {
  const dispath = useDispatch();

  return (
    <div className={item.wrapper}>
      <div>
        <div className={item.wrapperItem}>
          <div className={item.line}></div>
          <div className={item.item}>
            <div className={item.good}>
              <div className={item.img}>
                <img src={img} alt="img" />
              </div>
              <div className={item.text}>
                <span className={item.name}>{name}</span>
                <span className={item.settings}>
                  {types}, {size}см
                </span>
              </div>
            </div>

            <div className={item.counter}>
              <button
                onClick={() => {
                  dispath(itemMinus(id));
                }}
                className={item.btn}
              >
                -
              </button>
              <span className={item.countText}>{count}</span>
              <button
                onClick={() => {
                  dispath(itemPlus(id));
                }}
                className={item.btn}
              >
                +
              </button>
            </div>
            <div className={item.price}>{price * count}</div>
            <div
              onClick={() => {
                if (window.confirm("вы хотите удалить товар")) {
                  dispath(removeOneItem(id));
                }
              }}
              className={item.delete}
            >
              x
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrashItem;
