import React, { useEffect } from 'react';
import Container from '../components/Container';
import MyFilterList from '../components/MyFilterList';
import { TFilter } from '../type/types';
import MyFilterSetting from '../components/MyFilterSetting';

const defaultFilterList: TFilter[] = [
  {
    id: '1',
    dpslMtdCd: '0001',
    ctgrHirkId: 'string; // 부동산 10000',
    ctgrHirkIdMid: 'string; // 하위코드',

    sido: 'string;',
    sgk: 'string;',
    emd: 'string;',

    goodsPriceFrom: 100,
    goodsPriceTo: 1000,

    openPriceFrom: 100,
    openPriceTo: 1000,

    cltrNm: 'string; // 물건명',
    pbctBegnDtm: 'string; // 입찰 시작일',
    pbctClsDtm: 'string; // 입찰 마감일',
    cltrMnmtNo: 'string; // 물건관리번호',
  },
  {
    id: '2',
    dpslMtdCd: '0001',
    ctgrHirkId: 'string; // fasfdffasf부동산 10000',
    ctgrHirkIdMid: 'string; // 하sdfasf위코드',

    sido: 'stdsfafring;',
    sgk: 'strisdafafsang;',
    emd: 'strifsdfsadfafng;',

    goodsPriceFrom: 100,
    goodsPriceTo: 1000,

    openPriceFrom: 100,
    openPriceTo: 1000,

    cltrNm: 'strinsdafsfdsfasdfsdg; // 물건명',
    pbctBegnDtm: 'string; fdasfasf// 입찰 시작일',
    pbctClsDtm: 'string; dsfads// 입찰 마감일',
    cltrMnmtNo: 'string; sfasdf// 물건관리번호',
  },
];

export default function SelectFilterPage() {
  const [siGunGuOptions, setSiGunGuOptions] = React.useState([]);

  const [filterList, setFilterList] = React.useState(defaultFilterList);

  useEffect(() => {}, []);

  const getFilter = (filter: TFilter) => {
    setFilterList(prev => {
      return [...prev, filter];
    });
  };

  // todo react-table 라이브러리 사용해보기

  return (
    <Container>
      <p>선택한 필터에 해당하는 물건을 메일링 서비스로 받아보실 수 있습니다.</p>
      <MyFilterSetting setFilterList={setFilterList} getFilter={getFilter} />
      <MyFilterList filterList={filterList} />
      <div>결과물건목록</div>
    </Container>
  );
}
