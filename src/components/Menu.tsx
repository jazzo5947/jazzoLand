import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouseChimney,
  faFilter,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';

export default function Menu() {
  return (
    <nav className="bg-orange-600">
      <ul className="flex w-1/2 justify-between py-[20px]">
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? 'active-menu' : 'default-menu'
            }
            to="/"
          >
            <FontAwesomeIcon icon={faHouseChimney} className="mr-[5px]" />
            <span className="isDesktop">메인</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? 'active-menu' : 'default-menu'
            }
            to="/select"
          >
            <FontAwesomeIcon icon={faFilter} className="mr-[5px]" />
            <span className="isDesktop">필터 설정</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? 'active-menu' : 'default-menu'
            }
            to="/register"
          >
            <FontAwesomeIcon
              icon={faEnvelope}
              className="mr-[5px]"
              title="메일 신청"
            />
            <span className="isDesktop">메일 신청</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? 'active-menu' : 'default-menu'
            }
            to="/mail"
          >
            <FontAwesomeIcon
              icon={faEnvelope}
              className="mr-[5px]"
              title="메일 신청"
            />
            <span className="isDesktop">메일 화면</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
