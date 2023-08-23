import React, { useEffect } from 'react';
import Container from '../components/Container';
import MyFilterList from '../components/MyFilterList';
import { TFilter } from '../type/types';
import MyFilterSetting from '../components/MyFilterSetting';

const newCltrListURL =
  'http://openapi.onbid.co.kr/openapi/services/ThingInfoInquireSvc/getUnifyNewCltrList';

export default function SelectFilterPage() {
  const [siGunGuOptions, setSiGunGuOptions] = React.useState([]);

  const [filterList, setFilterList] = React.useState<TFilter[]>([]);

  useEffect(() => {}, []);

  const getFilter = (filter: TFilter) => {
    setFilterList(prev => {
      return [...prev, filter];
    });
  };

  // filterList를 params로 보내서 물건 목록을 가져와야 하는데요

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
