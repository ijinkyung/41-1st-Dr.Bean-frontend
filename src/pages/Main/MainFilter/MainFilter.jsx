import React, { useEffect } from "react";
import "./MainFilter.scss";
import MainFilterItem from "./MainFilterItem/MainFilterItem";
const ICON_DATA = [
  {
    id: 1,
    img: "/images/coffee_icon.png",
    name: "원두이름",
  },
  {
    id: 2,
    img: "/images/coffee_icon.png",
    name: "원두이름",
  },
  {
    id: 3,
    img: "/images/coffee_icon.png",
    name: "원두이름",
  },
  {
    id: 3,
    img: "/images/coffee_icon.png",
    name: "원두이름",
  },
];

function MainFilter() {
  useEffect(() => {
    fetch("http://10.58.52.57:3000/items/1")
      .then(res => res.json())
      .then(data => console.log(data));
  });

  return (
    <>
      <h1 className="icons-title">ICONS</h1>
      <div className="icons-container">
        <ul className="icon-wrap inner">
          {ICON_DATA.map(list => {
            return (
              <li key={list.id}>
                <img src={list.img} />
                <p className="icon-name">{list.name}</p>
              </li>
            );
          })}
        </ul>
      </div>
      <MainFilterItem />
    </>
  );
}

export default MainFilter;
