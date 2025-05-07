import React, { useState } from "react";
import Todoform from "./Todoform";
import Tododata from "./Tododata";

const Todo = () => {
  const [data, setData] = useState([]);
  return (
    <>
    <section className="p-[20px] w-full flex flex-col justifyitems-center">
        <h1 className="text-lg font-bold">Welcome to TODO</h1>
        <Todoform className="w-full" setData={setData} data={data} />
        <Tododata data={data} setData={setData}/>
      </section>
    </>
  );
};

export default Todo;
