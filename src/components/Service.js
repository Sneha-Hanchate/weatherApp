import React, {useState} from "react";
import axios from 'axios';
import Child from "./Child"

function Service() {
    const [input, setInput] = useState("")
    const [cityTemp, setCityTemp] = useState("")
    const changeHandler = (e)=>{
        setInput(e.target.value)
    }

// const clickHandler = ()=>{
//   let url = `https://www.jiosaavn.com/api.php?__call=autocomplete.get&query=maroom&_format=json&_marker=0&ctx=wap6dot0`;
//      axios.get(url).then(data=>{
//          console.log(data.albums.data.id)
//          let temp = data.albums.data.id;
//          setCityTemp(temp)
//      })
 
// }
const clickHandler = ()=>{
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${input},india&APPID=e16f24a1978d18e2f9e7e27d17a18a4d`;
     axios.get(url).then(data=>{
         console.log(data.data.main.temp)
         let temp = data.data.main.temp;
         setCityTemp(temp)
     })
 
}
  return (
    
    <div style={{padding:"3%",margin: "10%", border: "1px solid purple",marginLeft:"25%",marginRight:"25%", backgroundColor:"pink"}} className="App">
        <Child tempData={cityTemp}/>
     <input onChange={(e)=>{changeHandler(e)}} type="text" value={input}/>
 
     <button onClick={clickHandler}>Search</button>
  
  
    </div>
  );
}

export default Service;
