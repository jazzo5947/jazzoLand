import React from 'react';
import MailLayout from './mail-layout';
// 필요한 모듈 import
import * as nodemailer from 'nodemailer';
import * as cron from 'node-cron';
// import { getKamcoList } from '../parser/public-auction';

export default function AutoMailingPage() {
  // getKamcoList();
  return (
    <div>
      <MailLayout />
    </div>
  );
}

// // 메일 전송에 필요한 정보
// const smtpConfig = {
//   host: 'smtp.gmail.com', // 이메일 호스트
//   port: 465, // 포트
//   secure: true, // 보안 사용 (SSL/TLS)
//   auth: {
//     user: 'your-email@gmail.com', // 보내는 이메일 주소
//     pass: 'your-email-password', // 보내는 이메일 비밀번호
//   },
// };

// // 메일 전송 함수
// const sendMail = async () => {
//   try {
//     const transporter = nodemailer.createTransport(smtpConfig);

//     // 메일 옵션 설정
//     const mailOptions = {
//       from: 'your-email@gmail.com', // 보내는 사람 이메일 주소
//       to: 'recipient-email@example.com', // 받는 사람 이메일 주소
//       subject: '매주 월요일 메일입니다.', // 메일 제목
//       text: '안녕하세요, 매주 월요일마다 보내지는 메일입니다.', // 메일 내용
//     };

//     // 메일 전송
//     await transporter.sendMail(mailOptions);
//     console.log('메일이 전송되었습니다.');
//   } catch (error) {
//     console.error('메일 전송 중 오류가 발생하였습니다.', error);
//   }
// };

// // 매주 월요일마다 메일 전송 스케줄링
// cron.schedule('0 0 * * 1', () => {
//   sendMail();
// });
