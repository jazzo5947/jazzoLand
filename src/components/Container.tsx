import React from "react";

export default function Container(props: any) {
  return <div className="p-[20px] m-[20[px] w-100 h-100">{props.children}</div>;
}
