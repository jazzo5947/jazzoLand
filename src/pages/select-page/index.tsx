import React, { useEffect } from "react";
import Container from "../../components/Container";

export default function SelectPage() {
  const [siGunGuOptions, setSiGunGuOptions] = React.useState([]);

  useEffect(() => {}, []);

  return (
    <Container>
      <h2>내 필터 추가</h2>
      <p>선택한 필터에 해당하는 물건을 메일링 서비스로 받아보실 수 있습니다.</p>
      <section className="filter-list">
        <h2>내 필터 목록</h2>
        <ul>
          <li>필터1: 조건1, 조건2, 조건3, 조건4, 조건5</li>
          <li>필터1: 조건1, 조건2, 조건3, 조건4, 조건5</li>
        </ul>
      </section>
      <section className="filter-select-form-wrapper">
        <form id="filter-form">
          <div>
            <label className="basic-input-label">지역</label>
            <select className="basic-input">
              <option>시/도</option>
              <option>서울특별시</option>
              <option>경기도</option>
              <option>서울특별시</option>
              <option>서울특별시</option>
              <option>서울특별시</option>
              <option>서울특별시</option>
            </select>

            <select className="basic-input">
              <option>구/군</option>
              <option>서울특별시</option>
              <option>경기도</option>
              <option>서울특별시</option>
              <option>서울특별시</option>
              <option>서울특별시</option>
              <option>서울특별시</option>
            </select>

            <select className="basic-input">
              <option>읍/면/동</option>
              <option>서울특별시</option>
              <option>경기도</option>
              <option>서울특별시</option>
              <option>서울특별시</option>
              <option>서울특별시</option>
              <option>서울특별시</option>
            </select>

            <input
              className="basic-input"
              type="text"
              placeholder="나머지주소 직접입력"
            />
          </div>
          <div>
            <label className="basic-input-label">종류</label>
            <select className="basic-input">
              <option>전체</option>
              <option>주거용</option>
              <option>업무용</option>
              <option>토지</option>
              <option>기타</option>
            </select>
          </div>
          <div>
            <label className="basic-input-label">대지면적</label>
            <input className="basic-input" type="number" />
            <span>m2</span>

            <label className="basic-input-label">건물면적</label>
            <input className="basic-input" type="number" />
            <span>m2</span>
          </div>
          <div>
            <label className="basic-input-label">감정가</label>

            <input className="basic-input" type="text" />

            <label className="basic-input-label">최저가</label>
            <input className="basic-input" type="text" />
          </div>
          <div>
            <label className="basic-input-label">유찰횟수</label>
            <input className="basic-input" type="text" />
          </div>
        </form>
        <button className="basic-submit-button">필터 추가</button>
      </section>
    </Container>
  );
}
