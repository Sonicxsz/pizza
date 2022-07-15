import "./item.scss";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../../store/reducers/trashSlice";

export type Itempizza = {
  img: string;
  name: string;
  price: number;
  types: string[];
  size: number[];
  id: string;
};

const Item: React.FC<Itempizza> = ({ img, name, price, types, size, id }) => {
  let [count, setCount] = useState<number>(0);
  let [category, setCategory] = useState(0);
  let [sizeInd, setSizeInd] = useState(0);
  const sum = <span>{count}</span>;
  const obj = {
    img,
    name,
    price,
    types: types[category],
    size: size[sizeInd],
    id,
  };

  const dispath = useDispatch();
  return (
    <div className="item_wrapper">
      <div className="img_wrapper">
        <img src={img} alt="pizza" />
      </div>
      <div className="item_name">{name}</div>
      <div className="item_settings">
        <div className="settings_main">
          {types.map((i, ind) => {
            return (
              <button
                onClick={() => {
                  setCategory(ind);
                }}
                key={ind}
                className={category == ind ? "btn active" : "btn"}
              >
                {i}
              </button>
            );
          })}
        </div>
        <div className="settings_size">
          {size.map((i, ind) => {
            return (
              <button
                className={ind == sizeInd ? "sizebtn active" : "sizebtn"}
                onClick={() => {
                  setSizeInd(ind);
                }}
              >
                {i}см.
              </button>
            );
          })}
        </div>
      </div>
      <div className="item_footer">
        <div className="price">от {price} ₽</div>
        <button
          onClick={() => {
            setCount((count = count + 1));

            dispath(addItem(obj));
          }}
          className="item_add btn"
          style={{ width: "150px" }}
        >
          + Добавить {count > 0 ? sum : null}
        </button>
      </div>
    </div>
  );
};

export default Item;
