import React, { useEffect } from 'react';
import { TFilterType, TJusoType } from '../type/types';
import axios from 'axios';

type PMyFilterSettingProps = {
  filterList: TFilterType[];
};

function MyFilterSetting(): JSX.Element {
  const [accToken, setAccToken] = React.useState('');
  var errCnt = 0;
  const [sido, setSido] = React.useState<TJusoType[]>();
  const [sgk, setSgk] = React.useState<TJusoType[]>();
  const [emd, setEmd] = React.useState<TJusoType[]>();
  useEffect(() => {
    getAccessToken();
  }, []);

  const getAccessToken = async () => {
    await axios
      .get('https://sgisapi.kostat.go.kr/OpenAPI3/auth/authentication.json', {
        params: {
          consumer_key: '2ebdf6cf7ddd4eafa284',
          consumer_secret: 'ee54d708b71e4eac905c',
        },
      })
      .then(res => {
        const accessToken = res.data.result.accessToken;
        setAccToken(res.data.result.accessToken);
        getJuso(accessToken, 'non', setSido);
      })
      .catch(e => console.log(e));
  };

  const getJuso = async (
    _token: string,
    _cd: string = 'non',
    setResult: (result: any[]) => void
  ) => {
    await axios
      .get('https://sgisapi.kostat.go.kr/OpenAPI3/addr/stage.json', {
        params: {
          accessToken: _token,
          pg_yn: '0',
          cd: _cd,
        },
      })
      .then(res => {
        const { data } = res;
        console.log(data);
        switch (parseInt(data.errCd)) {
          case 0:
            setResult(data.result);
            break;
          case -401:
            errCnt++;
            if (errCnt < 200) {
              getAccessToken();
            }
            break;
          case -100:
            break;
        }
      })
      .catch(error => console.log(error));
  };

  const onSidoChangeHandler = (e: any) => {
    console.log(e.target.value);
    getJuso(accToken, e.target.value, setSgk);
  };

  const onSgkChangeHandler = (e: any) => {
    console.log(e.target.value);
    getJuso(accToken, e.target.value, setEmd);
  };

  const onSubmitHandler = (e: any) => {
    // todo 일단 필터를 세팅하면 그 필터에 맞는 물건을 걸러오는 기능을 만들어보자
    // todo 필터 저장소.. localStorage?

    console.log('submitHandler');
    // const params: TKamcoReqParams = {};
    // getKamcoList(params);
  };

  return (
    <section className="filter-select-form-wrapper">
      <form id="filter-form" onSubmit={onSubmitHandler}>
        <h2>내 필터 설정</h2>
        <label className="basic-input-label">지역</label>
        <select className="basic-input" onChange={onSidoChangeHandler}>
          <option>시/도</option>
          {sido?.map((d, idx) => {
            return (
              <option key={idx} value={d.cd}>
                {d.addr_name}
              </option>
            );
          })}
        </select>
        <select className="basic-input" onChange={onSgkChangeHandler}>
          <option>구/군</option>
          {sgk?.map((d, idx) => {
            return (
              <option key={idx} value={d.cd}>
                {d.addr_name}
              </option>
            );
          })}{' '}
        </select>
        <select className="basic-input">
          <option>읍/면/동</option>
          {emd?.map((d, idx) => {
            return (
              <option key={idx} value={d.cd}>
                {d.addr_name}
              </option>
            );
          })}{' '}
        </select>
        <input
          type="text"
          className="basic-input"
          placeholder="나머지주소 직접입력"
        />
        <div>
          <label className="basic-input-label">
            종류
            <select className="basic-input" id="ctgrHirkId">
              <option>전체</option>
              <option>주거용</option>
              <option>업무용</option>
              <option>토지</option>
              <option>기타</option>
            </select>
          </label>

          <label className="basic-input-label">
            세부종류
            <select className="basic-input" id="ctgrHirkIdMid">
              <option>전체</option>
            </select>
          </label>
        </div>
        <div>
          <label className="basic-input-label">
            대지면적
            <input className="basic-input" type="number" />
            <span>㎡ / </span>
          </label>

          <label className="basic-input-label">
            건물면적
            <input className="basic-input" type="number" />
            <span>㎡</span>
          </label>
        </div>
        <div>
          <label className="basic-input-label">
            감정가
            <input className="basic-input" type="text" />
          </label>
          <label className="basic-input-label">
            최저가
            <input className="basic-input" type="text" />
          </label>
        </div>
        <input
          type={'submit'}
          value="필터 추가"
          className="basic-submit-button"
        />
      </form>
    </section>
  );
}

export default MyFilterSetting;
