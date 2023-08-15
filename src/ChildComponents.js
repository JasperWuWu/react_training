import React, { memo } from "react";

let reRenderCount = 0;

// 在未設定memo情形，只要state一變動，全部的component都會一起被更新
// 使用memo後，如果傳入的porps有被變更才會更新component
const ChildComponents = memo(({ number }) => {
  reRenderCount++;
  return (
    <div>
      ChildComponents {number}
      <h2>ChildComponents reRender次數：{reRenderCount}</h2>
    </div>
  );
});

export default ChildComponents;
