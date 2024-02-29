import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  async function postData() {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, description }),
    };
    const { status } = await fetch(
      "http://18.141.102.143:8080/api/tutorials",
      requestOptions
    );

    if (status === 200) {
      navigate("/");
    }
  }
  return (
    <div>
      Title
      <input
        name="title"
        value={title}
        onChange={({ target }) => {
          setTitle(target.value);
        }}
      />
      Description
      <input
        name="description"
        value={description}
        onChange={({ target }) => {
          setDescription(target.value);
        }}
      />
      <button onClick={postData}>Submit</button>
    </div>
  );
};

export default Form;
