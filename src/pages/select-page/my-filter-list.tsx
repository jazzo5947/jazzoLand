import React from "react";
import { TFilterType } from "../../type/types";

type PMyFilterListProps = {
  filterList: TFilterType[];
};

function MyFilterList(props: PMyFilterListProps) {
  const filterList: TFilterType[] = props.filterList;

  return (
    <section className="filter-list">
      <h2>내 필터 목록</h2>
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
                <td>{filter.title}</td>
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
