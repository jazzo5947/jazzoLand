import React from 'react';
import { TFilter } from '../type/types';

type PMyFilterListProps = {
  filterList: TFilter[];
};

function MyFilterList(props: PMyFilterListProps) {
  const filterList: TFilter[] = props.filterList;

  const onShowResultList = (e: any) => {
    console.log(e.target.value);
  };

  return (
    <section className="filter-list">
      <h2>내 필터 목록</h2>
      <article>
        {filterList.map((filter, idx) => {
          return (
            <div
              key={idx}
              className="border rounded p-[5px] mb-[5px] border-black flex justify-between w-[50%]"
            >
              <button>X</button>
              <span>{filter.juso}</span>/<span>{filter.ctgrHirkName}</span>/
              <span>{filter.ctgrHirkNameMid}</span>/
              <span>{filter.goodsPriceFrom}</span>/
              <span>{filter.openPriceFrom}</span>
            </div>
          );
        })}
        <button onClick={onShowResultList} className="basic-submit-button">
          결과 보기
        </button>
      </article>
    </section>
  );
}

export default MyFilterList;
