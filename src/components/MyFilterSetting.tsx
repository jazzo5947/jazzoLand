import React, { useEffect } from 'react';
import { TFilter, TJuso, TLand } from '../type/types';
import axios from 'axios';
import { SubmitHandler, useForm } from 'react-hook-form';

type PMyFilterSettingProps = {
  filterList: TFilter[];
};

const encCodeKey =
  'ZwxVklLsL6zgVOKa4gEuD9BHrrEh8uwsxG2WMCerSG440FruBQhdMwzyjinpsNc5W0CtPlWOKbtBHrEx3oKU%2BA%3D%3D';

//필터타입 정의하기
// 나중에 이걸로 kamco에 요청 날려야 하자나
// 그럼 requestType에 맞춰줘야 하지 않나

const initialFilter: TFilter = {
  id: '',
  dpslMtdCd: '', // 매각 0001 임대 0002
  ctgrHirkId: '', // 부동산 10000
  ctgrHirkIdMid: '', // 하위코드
  sido: '',
  sgk: '',
  emd: '',
  goodsPriceFrom: 0,
  goodsPriceTo: 0,
  openPriceFrom: 0,
  openPriceTo: 0,
  cltrNm: '', // 물건명
  pbctBegnDtm: '', // 입찰 시작일
  pbctClsDtm: '', // 입찰 마감일
  cltrMnmtNo: '', // 물건관리번호
};

function MyFilterSetting(): JSX.Element {
  const [accToken, setAccToken] = React.useState('');
  var errCnt = 0;
  const [sido, setSido] = React.useState<TJuso[]>();
  const [sgk, setSgk] = React.useState<TJuso[]>();
  const [emd, setEmd] = React.useState<TJuso[]>();

  const [newFilter, setNewFilter] = React.useState<TFilter>(initialFilter);

  const { register, handleSubmit, setValue, getValues } = useForm<TFilter>();

  const [landTypeList, setLandTypeList] = React.useState<TLand[]>();
  const [scndLandTypeList, setScndLandTypeList] = React.useState<TLand[]>();

  const [filterList, setFilterList] = React.useState<TFilter[]>();

  useEffect(() => {
    getAccessToken();
    getMiddleLandCd();
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
        setAccToken(accessToken);
        getJuso(accessToken, setSido);
      })
      .catch(e => console.log(e));
  };

  const getJuso = async (
    _token: string,
    setResult: (result: any[]) => void,
    _cd?: string
  ) => {
    await axios
      .get('https://sgisapi.kostat.go.kr/OpenAPI3/addr/stage.json', {
        params: {
          accessToken: _token,
          cd: _cd,
        },
      })
      .then(res => {
        const { data } = res;
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

  const parseXML = (xmlData: string, type: string) => {
    const landTypeList = new Array<{
      ctgrId: string;
      ctgrNm: string;
    }>();
    const parser = new DOMParser();
    const parsedXml = parser.parseFromString(xmlData, 'text/xml');
    const items = parsedXml.getElementsByTagName('item');

    for (let i = 0; i < items.length; i++) {
      const ctgrId = items[i].children[1].innerHTML;
      const ctgrNm = items[i].children[2].innerHTML;

      landTypeList.push({
        ctgrId: ctgrId,
        ctgrNm: ctgrNm,
      });
    }
    if (type === 'MID') setLandTypeList(landTypeList);
    else if (type === 'BOTTOM') setScndLandTypeList(landTypeList);
  };

  const onSidoChangeHandler = (e: any) => {
    getJuso(accToken, setSgk, e.target.value);
  };

  const onSgkChangeHandler = (e: any) => {
    getJuso(accToken, setEmd, e.target.value);
  };

  const getMiddleLandCd = async () => {
    const code_url =
      'http://openapi.onbid.co.kr/openapi/services/OnbidCodeInfoInquireSvc/getOnbidMiddleCodeInfo';
    const full_url = `${code_url}?serviceKey=${encCodeKey}&numOfRows=10&pageNo=1&CTGR_ID=10000`;
    const res = await fetch(full_url).then(res => {
      return res.text();
    });
    parseXML(res, 'MID');
  };

  const getBottomLandCd = async (ctgrId: string) => {
    const code_url =
      'http://openapi.onbid.co.kr/openapi/services/OnbidCodeInfoInquireSvc/getOnbidBottomCodeInfo';
    const full_url = `${code_url}?serviceKey=${encCodeKey}&numOfRows=10&pageNo=1&CTGR_ID=${ctgrId}`;
    const res = await fetch(full_url).then(res => {
      return res.text();
    });
    parseXML(res, 'BOTTOM');
  };

  const onShowResultList = (e: any) => {
    e.preventDefault();

    console.log('리스트 조회!!!');
  };

  const getKamcoList = () => {
    //todo api 어떤거 쓸지 선택
    const url = `http://openapi.onbid.co.kr/openapi/services/KamcoPblsalThingInquireSvc/getKamcoPbctCltrList`;
    const url_2 = `http://openapi.onbid.co.kr/openapi/services/UtlinsttPblsalThingInquireSvc/getPublicSaleObject`;
  };

  const onSubmit: SubmitHandler<TFilter> = data => {
    console.log(data);
  };

  return (
    <>
      <div className="filter-select-form-wrapper">
        <form id="filter-form" onSubmit={handleSubmit(onSubmit)}>
          <h2>내 필터 설정</h2>

          <section>
            <h3>지역</h3>
            <label className="basic-input-label">
              <select
                className="basic-input"
                {...register('sido')}
                onChange={onSidoChangeHandler}
              >
                <option>시/도</option>
                {sido?.map((d, idx) => {
                  return (
                    <option key={idx} value={d.cd}>
                      {d.addr_name}
                    </option>
                  );
                })}
              </select>
              <select
                className="basic-input"
                {...register('sgk')}
                onChange={onSgkChangeHandler}
              >
                <option>시/군/구</option>
                {sgk?.map((d, idx) => {
                  return (
                    <option key={idx} value={d.cd}>
                      {d.addr_name}
                    </option>
                  );
                })}{' '}
              </select>
              <select className="basic-input" {...register('emd')}>
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
            </label>
          </section>

          <section>
            <h3>종류</h3>
            <label className="basic-input-label">
              <select
                className="basic-input"
                id="ctgrHirkId"
                {...register('ctgrHirkId')}
              >
                <option>전체</option>
                {landTypeList?.map((landCd, idx) => {
                  return (
                    <option key={idx} value={landCd.ctgrId}>
                      {landCd.ctgrNm}
                    </option>
                  );
                })}
              </select>
            </label>

            <label className="basic-input-label">
              <select
                className="basic-input"
                id="ctgrHirkIdBottom"
                {...register('ctgrHirkIdMid')}
              >
                <option>전체</option>
                {scndLandTypeList?.map((landCd, idx) => {
                  return (
                    <option key={idx} id={landCd.ctgrId}>
                      {landCd.ctgrNm}
                    </option>
                  );
                })}
              </select>
            </label>
          </section>

          <section>
            <h3>감정가/최저가</h3>
            <div>
              <label>
                감정가하한
                <input
                  className="basic-input"
                  type="text"
                  {...register('goodsPriceFrom')}
                />
                만원
              </label>
            </div>
            <div>
              <label>
                감정가상한
                <input
                  className="basic-input"
                  type="text"
                  {...register('goodsPriceTo')}
                />
                만원
              </label>
            </div>
            <div>
              <label>
                최저입찰가
                <input
                  className="basic-input"
                  type="text"
                  {...register('openPriceFrom')}
                />
                만원
              </label>
            </div>
            <div>
              <label>
                최고입찰가
                <input
                  className="basic-input"
                  type="text"
                  {...register('openPriceTo')}
                />
                만원
              </label>
            </div>
          </section>

          <input
            type="submit"
            value="필터 추가"
            className="basic-submit-button"
          />
        </form>
      </div>
      <div id="resultBox">여기에 결과값이 나오는 거야 </div>
    </>
  );
}

export default MyFilterSetting;
