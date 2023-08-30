import React, { useEffect } from 'react';
import Container from '../components/Container';
import MyFilterList from '../components/MyFilterList';
import { TFilter } from '../type/types';
import MyFilterSetting from '../components/MyFilterSetting';
import axios from 'axios';
import { encodedKey, newCltrURL } from '../type/info';

export default function SelectFilterPage() {
  const [filterList, setFilterList] = React.useState<TFilter[]>([]);

  useEffect(() => {
    console.log(filterList);

    axios
      .get(`${newCltrURL}?serviceKey=${encodedKey}&numOfRows=10&pageNo=1&`)
      .then(res => console.log(res.data));
  }, [filterList]);

  const getFilter = (filter: TFilter) => {
    setFilterList(prev => {
      return [...prev, filter];
    });
  };

  // todo 나중에 페이지를 나눠야겠다 필터 설정 페이지, 물건 목록 페이지
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
