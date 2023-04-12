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
      <article>
        {filterList.map(filter => {
          return (
            <div className="border rounded p-[5px] mb-[5px] border-black flex justify-between">
              <p>
                {filter.id}. {filter.juso} {filter.gubun1} {filter.gubun2} /{' '}
                {filter.land}㎡ / {filter.building}㎡ / {filter.standardPrice}원
                / {filter.minPrice}원
              </p>
              <button>X</button>
            </div>
          );
        })}
      </article>
    </section>
  );
}

export default MyFilterList;
