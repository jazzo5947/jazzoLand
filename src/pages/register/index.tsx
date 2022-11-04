import React from 'react';

export default function Register() {
  return (
    <>
      <h2 className="text-[24px] bold my-[20px]">신청서</h2>
      <form>
        <label>이름</label>
        <input type="text" />
        <label>메일주소</label>
        <input type="text" />
        <label>정보동의</label>
        <input type="text" />
      </form>
    </>
  );
}
