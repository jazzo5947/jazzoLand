import React from "react";
import Container from "../../components/Container";

export default function Register() {
  return (
    <Container>
      <h2>신청서</h2>
      <form className="flex flex-col">
        <label className="basic-input-label">
          이름
          <input className="basic-input" type="text" />
        </label>
        <label className="basic-input-label">
          메일주소
          <input className="basic-input" type="text" />
        </label>
        <label className="basic-input-label">
          정보동의
          <input className="basic-input" type="text" />
        </label>
      </form>
    </Container>
  );
}
