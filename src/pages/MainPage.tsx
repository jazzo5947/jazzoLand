import React from "react";
import Container from "../components/Container";

export default function MainPage() {
  return (
    <Container>
      <h2>재조옥션</h2>
      <ul>
        <li className="text-[14px]">
          원하는 조건으로 필터링된 공매물건 정보를 주 1회 메일로 전송해
          드립니다.
        </li>
        <li className="text-[14px]">
          지도 내에 존재하는 물건을 리스트로 편리하게 확인하세요!
        </li>
      </ul>
    </Container>
  );
}
