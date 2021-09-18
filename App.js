import './App.css';
import { useState } from 'react';
import React from 'react';

function App() {
  const [ayush,setayush] = useState();
  const getayush = async() => {
    const response = await fetch("https://reqres.in/api/users?page=1");
    const data = await response.json();
    setayush(data.data);
  };
  return (
    <>
      <header className="topone">
        <h1><mark>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;REACT APP</mark></h1>
        <h2>This is task 2</h2>

        <div className="button" onClick={getayush}>Fetch Data</div>
      </header>
      <div className="container">
        {ayush?.map((c1,index) => {
          return(
            <div className=" row" key={index}>
              <img src={c1.avatar} className="image" aria-multiselectable/>
              <div className="content">
                <h2 className="heading">
                {c1.first_name}{c1.last_name}
                </h2>
                <h5 className="e_mail">{c1.email}</h5>
              </div>

            </div>
          );
        })}  
        
        
      </div>  
      </>
        
      
  );
}

export default App;
