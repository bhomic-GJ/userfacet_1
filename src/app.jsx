import React, { useState, useEffect } from "react";
import List from './components/List.jsx';

import "./styles/mystyles.css";


export default function App() {
  const [data, setData] = useState([]);

  const status = (response) => {
    if (response.status >= 200 && response.status < 300) {
      return Promise.resolve(response);
    }
    return Promise.reject(new Error(response.statusText));
  };

  const json = (response) => response.json();

  function fetch_data(url) {
    
    console.log(url);
    
    fetch(url)
      .then(status)
      .then(json)
      .then((data) => {
        // console.log('Request succeeded with JSON response', data);

        setData({records: data.data, year : data.year} );
      })
      .catch((error) => {
        //console.log('Request failed', error)
      });
  }

  let url = "https://datausa.io/api/data?drilldowns=State&measures=Population";
  
  useEffect(() => {

    let prevYear = localStorage.getItem( 'year' );
    
    let turl = url;
    
    if(prevYear){
        setData({records: [], year: prevYear});
    
        turl = url+"&year="+prevYear;
    }
    
    console.log(turl);
    
    fetch_data(
      turl
    );
  

  }, []);

  function search(event){
      let val = event.target.value;
      
      let surl = url+"&year="+val;
      
      console.log(surl);
    
      localStorage.setItem( 'year',val);
    
      setData({records: data.records, year : val} );
    
      fetch_data(surl);     
  }  
  
  return (
    
    <div className="App">
      
      <div className="main">
        
       <div id="back"></div>
        <div className="contents">
        <h1>Userfacet</h1>
        <h2>Population Search</h2>
        
        <div className="searchbox">
          <div className="ylabel">Year </div><input id="searchtext" value ={data.year} type="number" min ="1800" onChange={search} placeHolder="year"></input>
        </div>
        <div className="main">
          <List data={data.records} />
        </div>
        </div>
      </div>  
    </div>
  );
}
