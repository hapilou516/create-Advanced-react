import React, { useState } from "react";

export const UseStateDemo:React.FC = () => {
  const [count, setCount] = useState(0);
  // const [count, setCount] = useState(() => 0); //惰性初始化
  const [obj, setObj] = useState({
    count: 0,
    name: '张三'
  });
  return <>
    <h1>{count}</h1>
    <h1>{obj.count}</h1>
    <button onClick={() => setCount((c)=>c+1)}>点击count加1</button>
    <button onClick={() =>setObj((o) =>{return {...o, count: o.count + 10}})}>点击obj加10</button>
  </>
}