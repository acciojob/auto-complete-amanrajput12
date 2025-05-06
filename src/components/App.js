
import React, { useEffect, useState } from "react";
import './../styles/App.css';

const App = () => {

  const [data,setData]=useState(null)
  const fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig"];

  useEffect(()=>{
     setData(fruits)
  },[])

  function filterdata(value){
    console.log("filter")
      let data =  fruits.filter((data)=>data.includes(value))
      console.log('data is',data)
      setData(data)
  }
  return (
    <div>
        {/* Do not remove the main div */}
       <h1>Search item</h1>
       <input onChange={(e)=>filterdata(e.target.value)} type="text" />
       <ul>{data &&  data.map((data,i)=><li key={i}>{data}</li>)}</ul>
    </div>
  )
}

export default App
