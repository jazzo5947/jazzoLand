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
      id: '1',
      juso: '서울특별시',
      gubun1: '강남구',
      gubun2: '역삼동',
      land: '330',
      building: '84.74',
      standardPrice: '300,000,000',
      minPrice: '230,000,000',
    },
    {
      id: '2',
      juso: '서울특별시',
      gubun1: '강남구',
      gubun2: '역삼동',
      land: '330',
      building: '84.74',
      standardPrice: '300,000,000',
      minPrice: '230,000,000',
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
