import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Happlab = () => {
  const [apiData, setapiData] = useState([]);
  const [activeData, setActiveData] = useState([]);
  const [navigator, setNavigator] = useState([]);

  const navigate = useNavigate();

  async function getData() {
    const resp = await fetch("http://18.141.102.143:8080/api/tutorials");
    const data = await resp.json();
    setapiData([...data]);
  }

  useEffect(() => {
    if (apiData.length > 0) {
      setActiveData([...apiData].slice(0, 10));
      const runner = (apiData.length / 10) | 0;
      const temp = [];

      for (let i = 0; i < runner; i++) {
        temp.push(
          <button key={i} onClick={() => handlePagination(i)}>
            {i + 1}
          </button>
        );
      }
      setNavigator(temp);
    }
  }, [apiData]);

  function handlePagination(i) {
    const spread = [...apiData];
    const temp = spread.slice(10 * i, 10 * i + 10);
    setActiveData(temp);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <button onClick={() => navigate("/form")}>Go to the form</button>
      <table style={{ margin: "5% 25%" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Description</th>
            <th>Title</th>
          </tr>
        </thead>

        <tbody>
          {activeData.map((data) => {
            const { id, description, title } = data;
            return (
              <tr key={id}>
                <td>{id}</td>
                <td>{description}</td>
                <td>{title}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {navigator.map((ele) => ele)}
    </div>
  );
};

export default Happlab;
