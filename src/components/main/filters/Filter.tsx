import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./filter.scss";
import { setActiveFilter, setActiveSort } from "../../../store/reducers/filter";
import { useEffect } from "react";
import { useRef } from "react";
import { RootState } from "../../../store/store";
import React from "react";

export const filters = [
  { name: "популярности", sortType: "rating" },
  { name: "популярности(убыв)", sortType: "-rating" },
  { name: "по цене", sortType: "price" },
  { name: "по цене(убыв)", sortType: "-price" },
  { name: "по алфавиту", sortType: "title" },
];

export const categories = [
  { name: "Все пиццы", tag: "ALL" },
  { name: "Вегатарианская", tag: "VEG" },
  { name: "Гриль", tag: "GRILL" },
  { name: "Острые", tag: "ACUTE" },
  { name: "Закрытые", tag: "CLOSED" },
];

const Filter: React.FC = () => {
  let [pop, setPop] = useState<boolean>(false);
  const { activeFilter }: any = useSelector<RootState>((state) => state.filter);
  const handlerClick = (e: MouseEvent) => {
    const _event = e as MouseEvent & {
      path: Node[];
    };
    if (pupRef.current && !_event.path.includes(pupRef.current)) {
      setPop(false);
    }
  };
  const pupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.addEventListener("click", handlerClick);

    return () => {
      document.body.removeEventListener("click", handlerClick);
    };
  }, []);

  const dispath = useDispatch();
  const activeSort: any = useSelector<any>(
    (state) => state.filter.activeSort.name
  );

  return (
    <div className="filter_wrapper">
      <div>
        <ul className="filter_ul">
          {categories.map((i, ind) => {
            return (
              <li
                className={
                  activeFilter.name === i.name
                    ? "filter_li active"
                    : "filter_li"
                }
                onClick={() => {
                  dispath(setActiveFilter(i));
                }}
                key={ind}
              >
                {i.name}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="popup_wrap">
        <div
          ref={pupRef}
          onClick={() => {
            setPop(!pop);
          }}
          style={{ minWidth: "200px" }}
        >
          Сортировка по: <div className="pop_f">{activeSort}</div>
        </div>
        {pop === true && (
          <div className="popup">
            <ul>
              {filters.map((i) => {
                return (
                  <li
                    onClick={() => {
                      dispath(setActiveSort(i));
                      setPop(false);
                    }}
                    className={
                      activeSort === i.name ? "pop_filt popActive" : "pop_filt"
                    }
                  >
                    {i.name}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Filter;
