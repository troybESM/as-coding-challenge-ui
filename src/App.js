import "./App.css";
import Plot from "react-plotly.js";
import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState({grid:null});
  const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT

  useEffect(() => {
    // fetch('https://ri8x2qu7mg.execute-api.us-east-2.amazonaws.com/')
    fetch(`${API_ENDPOINT}`)
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error));
  }, []);
  
  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Plot
        data={[
          {
            z: data.grid,
            colorscale: "Portland",
          
            mode: "markers",
            type: "surface",
          },
        ]}
        layout={{
          title: `Lowest Point: ${data.lowest}\nStarting Point:${data.starting}`,
        }}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}

export default App;
