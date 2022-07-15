import "./header.scss";
import { useSelector } from "react-redux";
import logo from "../../../assets/img/logo.svg";
import trash from "../../../assets/img/red.svg";
import { NavLink } from "react-router-dom";
import Search from "../search/search";
import React from "react";
import { RootState } from "../../../store/store";

type HeaderProps = {
  showTrash: boolean;
};

const Header: React.FC<HeaderProps> = ({ showTrash }) => {
  const { totalItems, totalPrice }: any = useSelector<RootState>(
    (state) => state.trash
  );

  return (
    <div>
      <div className="header_wrapper">
        <div className="header_logo">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div>
            <NavLink
              to="/"
              style={{
                textDecoration: "none",
              }}
            >
              <h1>PIZZA MARKET</h1>
              <h2>самая вкусная пицца</h2>
            </NavLink>
          </div>
          {showTrash && <Search />}
        </div>

        {showTrash && (
          <div className="trash_wrap">
            <div>{totalPrice} ₽</div>
            <div className="line"></div>
            <NavLink to="/trash" className="trash_link">
              <div className="trash_flex">
                <div className="trash">
                  <img src={trash} alt="trash" />
                </div>
                <div>{totalItems}</div>
              </div>
            </NavLink>
          </div>
        )}
      </div>
      <div className="liner"></div>
    </div>
  );
};

export default Header;
