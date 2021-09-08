
import Todo from "./Todo";
import { useState } from "react";



function App() {
  const [title,setTitle]=useState('Nikhil Soni')
  const [date,setDate]=useState('27/02/2000')
  return (
    <div>
      <h2 className="title">{title}</h2>
      <h3 className="date"> {date} </h3>
       <Todo changeTitle={setTitle} changeDate={setDate}/>
      
          </div>
  );
}

export default App;
