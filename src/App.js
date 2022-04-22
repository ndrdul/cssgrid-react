import React, { useState, useEffect } from 'react';
import './App.css';

import axios from "axios";

import { Nav } from './components/Nav';
import { Graph } from './components/Graph';
import { Node } from './components/Node';
import { Footer } from './components/Footer';
import { Loading } from './components/Loading';


const BASEURL = "https://flaskrandomgraph.herokuapp.com/Barabasi"

const App = () =>  {
  const [dataValue, setdataValue] = useState();
  const [nodeN, setnodeN] = useState(40);

  const handleSubmit = (event) => {
    event.preventDefault();
    getData();
  }


  const getData = async () => {

    const result = await axios.get(BASEURL, {
      params: {
        N: nodeN
      }
    });

    setdataValue(result.data);
  };

  useEffect(() => {
    getData();
  });

  return (

    <div className="grid">
      <div className="nav"><Nav /></div>
      <div className="graph">{dataValue ? <Graph/> : <Loading />}</div>
      <div className="node"><Node /></div>
      <div className="footer"><Footer /></div>
    </div>

  );
}

export default App;
