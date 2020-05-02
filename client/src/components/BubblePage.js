import React, { useState, useEffect } from "react";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import { axiosWithAuth } from "./axiosWithAuth";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  
  const getColors = () => {
    axiosWithAuth().get('http://localhost:5000/api/colors')
    .then(response => {
      console.log(response)
      setColorList(response.data)
    })
  }

  useEffect(() => {
    getColors()
  }, [])

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} refresh={getColors}/>
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
