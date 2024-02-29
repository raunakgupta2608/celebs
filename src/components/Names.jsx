import React from "react";

const Names = ({ names }) => {
  return (
    <>
      <h1>User data</h1>
      {names?.map((res, index) => {
        return <h1 key={index}>{res}</h1>;
      })}
    </>
  );
};

export default Names;
