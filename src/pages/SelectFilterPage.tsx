import React, { useEffect } from 'react';
import Container from '../components/Container';
import MyFilterList from '../components/my-filter-list';
import MyFilterSetting from '../components/my-filter-setting';
import { TFilterType } from '../type/types';

export default function SelectFilterPage() {
  const [siGunGuOptions, setSiGunGuOptions] = React.useState([]);

  useEffect(() => {}, []);

  // todo react-table 라이브러리 사용해보기

  const filterList: TFilterType[] = [
    {
      title: 'string',
      juso: 'string',
      gubun1: 'string',
      gubun2: 'string',
      land: 'string',
      building: 'string',
      standardPrice: 'string',
      minPrice: 'string',
    },
    {
      title: 'string',
      juso: 'string',
      gubun1: 'string',
      gubun2: 'string',
      land: 'string',
      building: 'string',
      standardPrice: 'string',
      minPrice: 'string',
    },
  ];

  return (
    <Container>
      <p>선택한 필터에 해당하는 물건을 메일링 서비스로 받아보실 수 있습니다.</p>
      <MyFilterList filterList={filterList} />
      <MyFilterSetting />
    </Container>
  );
}
