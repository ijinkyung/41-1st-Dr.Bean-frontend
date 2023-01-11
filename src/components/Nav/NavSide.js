import React, { useState } from "react";
import "./NavSide.scss";
import { sideArray } from "./NavArea";
import { Navigate, useNavigate } from "react-router-dom";

let result = [];
const NavSide = props => {
  const [subMenu, setSubMenu] = useState({ list: [], title: "" });

  const navClick = (value, event) => {
    event.stopPropagation();

    result = [];
    sideArray.forEach(function (item) {
      if (item.title === value) {
        result = [...item.area];
        return;
      }
    });

    setSubMenu({ list: result, title: value });
  };
  const navigate = useNavigate();

  return (
    <div className="NavSide" onClick={() => props.onClose()}>
      {sideArray.map((item, index) => {
        return (
          <div key={index} className="side-menu">
            <div
              className="side-list"
              onClick={event => navClick(item.title, event)}
            >
              {item.title}
            </div>
            <div className="sub-menu">
              {item.title === subMenu.title ? (
                subMenu.list.map((item, index) => {
                  return (
                    <div
                      key={index}
                      onClick={e => {
                        navigate(item.url);
                      }}
                    >
                      {item.name}
                    </div>
                  );
                })
              ) : (
                <div />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default NavSide;
