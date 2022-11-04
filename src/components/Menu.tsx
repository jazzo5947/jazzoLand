import React from "react";
import { NavLink } from "react-router-dom";
import "./Menu";

export default function Menu() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/"
          >
            메인
          </NavLink>
        </li>
        <li>
          {/* <NavLink className={({ isActive }) => isActive ? "red" : "blue"} /> */}
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/select"
          >
            필터 설정
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/map"
          >
            지도 보기
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "acitve" : "")}
            to="/register"
          >
            메일 신청
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
