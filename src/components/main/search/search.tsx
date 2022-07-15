import debounce from "lodash.debounce";
import React from "react";
import { useState } from "react";
import style from "./search.module.scss";
import x from "./x.svg";
import { setSearchInp } from "../../../store/reducers/filter";
import { useAppDispatch } from "../../../store/store";
const Search: React.FC = () => {
  const [localInp, setLocalInp] = useState<string>("");
  const dispath = useAppDispatch();
  const usDeb = React.useCallback(
    debounce((str: string) => {
      dispath(setSearchInp(str));
    }, 150),
    []
  );
  const  onChangeInp = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalInp(e.target.value);
    usDeb(e.target.value);
    
  };

  return (
    <div className={style.root}>
      <input
        type="text"
        placeholder="поиск по пиццам"
        name="text"
        value={localInp}
        onChange={onChangeInp}
        className={style.input}
      />
      {localInp && (
        <img
          src={x}
          alt="x"
          className={style.x}
          onClick={() => {
            setLocalInp("");
            usDeb("")
          }}
        />
      )}
    </div>
  );
};

export default Search;
