import React from 'react';
import { TFilterType } from '../type/types';

type PMyFilterListProps = {
  filterList: TFilterType[];
};

function MyFilterList(props: PMyFilterListProps) {
  const filterList: TFilterType[] = props.filterList;

  return (
    <section className="filter-list">
      <h2>내 필터 목록</h2>
      <div>
        {filterList[0].id}. {filterList[0].juso} {filterList[0].gubun1}
        {filterList[0].gubun2} / {filterList[0].land}㎡ /
        {filterList[0].building}㎡ / {filterList[0].standardPrice} /
        {filterList[0].minPrice}
      </div>
      <table>
        <thead>
          <tr>
            <td>번호</td>
            <td>지역</td>
            <td>종류</td>
            <td>면적 (대지/건물)</td>
            <td>감정가</td>
            <td>최저가</td>
          </tr>
        </thead>
        <tbody>
          {filterList.map((filter, idx) => {
            return (
              <tr key={idx}>
                <td>{filter.id}</td>
                <td>{filter.juso}</td>
                <td>
                  {filter.gubun1} - {filter.gubun2}
                </td>
                <td>
                  {filter.land}m2 / {filter.building}m2
                </td>
                <td>{filter.standardPrice}원</td>
                <td>{filter.minPrice}원</td>
                <td>X</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
}

export default MyFilterList;
