//Questions
// 1. Load data from api on load of page(https://jsonplaceholder.typicode.com/users) and show name and id
// 2. On sort button click it should sort alphabetically in ascending order,
//    then second click sort in descending and then third click original order
// 3. Show max 3 records on each page and add next previous button to navigate between pages

// "Leanne Graham"
// "Ervin Howell"
// "Clementine Bauch"
// "Patricia Lebsack"
// "Chelsey Dietrich"
// "Mrs. Dennis Schulist"
// "Kurtis Weissnat"
// "Nicholas Runolfsdottir V"
// "Glenna Reichert"
// "Clementina DuBuque"

import React, { useEffect, useState } from "react";
import Names from "./Names";

const UpStox = () => {
  const [data, setData] = useState(null);
  const [original, setOriginal] = useState(null);
  const [sortOrder, setSortOrder] = useState(1);
  const [currVal, setCurrVal] = useState(0);
  const [passData, setPassDats] = useState(null);

  async function callTheApi() {
    const temp = await fetch("https://jsonplaceholder.typicode.com/users");
    const res = await temp.json();
    setData(res);
    const names = res?.map((ele) => ele.name);

    setOriginal(names);
    setPassDats(names.slice(currVal, currVal + 3));
    setCurrVal(currVal + 3);
  }

  const sortUserData = () => {
    if (sortOrder === 1 || sortOrder === 2) {
      if (sortOrder === 1) setOriginal(original.sort());
      if (sortOrder === 2) setOriginal(original.sort().reverse());

      setSortOrder((prev) => prev + 1);
    }
    if (sortOrder === 3) setOriginal(data?.map((ele) => ele.name));
  };

  useEffect(() => {
    callTheApi();
  }, []);

  const handlePrev = () => {
    if (currVal - 6 >= 0) {
      setPassDats(original.slice(currVal - 6, currVal - 3));
      setCurrVal(currVal - 3);
    }
  };
  const handleNext = () => {
    setPassDats(original.slice(currVal, currVal + 3));
    setCurrVal(currVal + 3);
  };

  return (
    <div className="App">
      <div className="button-container">
        <button onClick={sortUserData}>Sort data</button>
      </div>

      <Names names={passData} />

      <div>
        <button onClick={handlePrev}>Prev</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default UpStox;
