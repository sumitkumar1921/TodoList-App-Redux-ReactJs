import { useState } from "react";

import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  

  return (
    <>
      <h1 className=" text-[34px] text-weight bg-zinc-600">Learn About Redux toolkit</h1>
      <AddTodo/>
      <Todos/>
    </>
  );
}

export default App;
