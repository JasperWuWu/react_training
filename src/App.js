import { useCallback, useMemo, useState } from "react";
import ChildComponents from "./ChildComponents";
import "./styles/style.css";

// memo 使用在節省component重複被渲染，傳入的props改變才會重新渲染
// ===================================================================
// useCallback 記住記憶體位置，避免function傳入的component被重新渲染
// 因為每次component更新，function記憶體位置都會被重新建立而不同
// ===================================================================
// useMemo 記住function運算完後的結果，若需要使用function運算結果
// 在偵測的變數未被修改時，都會傳入之前算好的結果

function App() {
  const [value, setValue] = useState("");
  let changeHandler = (e) => {
    setValue(e.target.value);
  };

  const expensiveCompute = useCallback(() => {
    for (let i = 1; i < 100000000; i++) {}
    return 10;
  }, []);

  const expensiveValue = expensiveCompute();

  const expensiveCompute2 = (number) => {
    for (let i = 1; i < 100000000; i++) {}
    return number;
  };
  let expensiveValue2;
  let useMemoFunciton = useMemo(() => {
    let randomNumber = Math.floor(Math.random() * 10);
    expensiveValue2 = expensiveCompute2(randomNumber);

    return randomNumber;
  }, []);

  console.log(useMemoFunciton);

  return (
    <div className="App">
      <h1>練習 memo, useCallback, useMemo</h1>
      <input type="text" onChange={changeHandler} />
      <p>輸入文字：{value}</p>
      <ChildComponents number={"不會被變動的props"} />
    </div>
  );
}

export default App;
