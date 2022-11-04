import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Menu() {
  return (
    <nav className="bg-orange-600">
      <ul className="flex w-1/2 justify-between py-[20px]">
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? 'active text-white px-[40px]' : 'text-black px-[40px]'
            }
            to="/"
          >
            메인
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? 'active text-white px-[40px]' : 'text-black px-[40px]'
            }
            to="/select"
          >
            필터 설정
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? 'active text-white px-[40px]' : 'text-black px-[40px]'
            }
            to="/map"
          >
            지도 보기
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? 'active text-white px-[40px]' : 'text-black px-[40px]'
            }
            to="/register"
          >
            메일 신청
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
