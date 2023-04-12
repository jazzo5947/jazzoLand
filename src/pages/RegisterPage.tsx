import React from 'react';
import Container from '../components/Container';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

interface IRegisterFormInput {
  name: string;
  email: string;
  phone: string;
}
export default function RegisterPage() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IRegisterFormInput>();

  const onSubmit: SubmitHandler<IRegisterFormInput> = data => console.log(data);

  return (
    <Container>
      <h2>신청서</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="block">
          이름
          <input
            className="basic-input"
            {...register('name', {
              required: '이름을 두 글자 이상 입력하세요',
              minLength: 2,
            })}
          />
          <ErrorMessage
            className="text-red-600"
            errors={errors}
            name="name"
            as="p"
          />
        </label>
        <label className="block">
          이메일
          <input
            type="email"
            className="basic-input"
            {...register('email', {
              required: '메일 주소를 확인해주세요',
              pattern:
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            })}
          />
          <ErrorMessage
            className="text-red-600"
            errors={errors}
            name="email"
            as="p"
          />
        </label>

        <label className="block">
          휴대폰번호
          <select className="basic-input">
            <option>010</option>
          </select>
          <input
            type="number"
            className="basic-input"
            {...register('phone', { required: '휴대폰번호를 확인해주세요' })}
          />
          <ErrorMessage
            className="text-red-600"
            errors={errors}
            name="phone"
            as="p"
          />
        </label>
        <button className="mt-[20px] border p-[5px]" type="submit">
          구독신청
        </button>
      </form>
    </Container>
  );
}
