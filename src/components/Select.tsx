import React from "react";

type TSelectProps = {
  title: string;
  id: string;
  onChangeHandler: () => void;
  list: any[];
};

function Select({ title, id, onChangeHandler, list }: TSelectProps) {
  return (
    <label className="basic-input-label">
      {title}
      <select className="basic-input" id={id} onChange={onChangeHandler}>
        <option>전체</option>
        {list?.map((item, idx) => {
          return (
            <option key={idx} id={item.ctgrId}>
              {item.ctgrNm}
            </option>
          );
        })}
      </select>
    </label>
  );
}
