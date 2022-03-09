import './App.css';
import React from 'react';
import Menu from './Menu';
import api from './api/wines'
import { useState, useEffect } from 'react';
import Results from './Results';
//    {"items-2022-02-19":"Id","field2":"Name","field3":"Description","field4":"Brand","field5":"Price","field6":"Bottle deposit","field7":"Quantity left","field8":"Url","field9":"Thumb url","field10":"Show in catalog","field11":"Can be shipped","field12":"Brand name","field13":"Container qty","field14":"Container type","field15":"Volume","field16":"Volume units","field17":"Abv","field18":"Vintage","field19":"Country of origin","field20":"Total quantity","field21":"Todays sale","field22":"Created at","field23":"Updated at","field24":"Sale price","field25":"Sale start date","field26":"Sale end date","field27":"Sku","field28":"Upc","field29":"Upc raw","field30":"Code","field31":"Sanitized name","field32":"Bottle deposit","field33":"Flag","field34":"Edescription","field35":"Univ prod","field36":"Prod","field37":"Notes","field38":"Linked at","field39":"Linked by","field40":"Linked error","field41":"List price"},


function App() { 
  const [wines, setWines] = useState([]);

  useEffect (() =>{
    const fetchWines = async () =>{
      try{
        const response = await api.get('/wines')
        setWines(response.data);
        console.log(wines)


      } catch(err){
        if (err.response){
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers)
        }else{
          console.log(`error: ${err.message}`)
        }

      }
    }
    fetchWines();
  },[])
  return (
   <>
  <Menu />
  <Results wines={wines}/>
  </>
  )
  
}

export default App;
