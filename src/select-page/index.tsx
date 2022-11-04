import React from "react";

export default function SelectPage() {
  return (
    <>
      <h2>내 필터 추가</h2>
      <p>선택한 필터에 해당하는 물건을 메일링 서비스로 받아보실 수 있습니다.</p>
      <section className="filter-list">
        <h2>내 필터 목록</h2>
        <ul>
          <li>필터1: 조건1, 조건2, 조건3, 조건4, 조건5</li>
          <li>필터1: 조건1, 조건2, 조건3, 조건4, 조건5</li>
        </ul>
      </section>
      <div>
        <label>지역</label>
        <input type="text" placeholder="시/도" />
        <input type="text" placeholder="구/군" />
        <input type="text" placeholder="읍/면/동" />
        <input type="text" placeholder="나머지주소 직접입력" />
      </div>
      <div>
        <label>종류</label>
        <input type="text" />
      </div>
      <div>
        <label>대지면적</label>
        <input type="text" />

        <label>건물면적</label>
        <input type="text" />
      </div>
      <div>
        <label>감정가</label>
        <input type="text" />

        <label>최저가</label>
        <input type="text" />
      </div>
      <div>
        <label>유찰횟수</label>
        <input type="text" />
      </div>
    </>
  );
}
