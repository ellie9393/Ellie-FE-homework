import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useState } from "react";
import axios from "axios";

function Search() {
  // Use state to store the input value and the items
  const [value, setValue] = useState("");
  const [items, setItems] = useState(null);

  // Define a function that fetches items from the API
  const fetchItems = async () => {
    try {
      // API only provides a GET that returns a charcter with the id #
      const response = await axios.get(
        `https://thronesapi.com/api/v2/Characters/${value}`
      );
        setItems(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setValue(value);
  };

  return (
    <div className="px-4 py-5 my-5 text-center">
      <h1 className="display-5 mb-4 fw-bold">search a character</h1>
      <div className="col-lg-6 mx-auto">
        <InputGroup size="lg" onChange={handleChange}>
          <InputGroup.Text>input</InputGroup.Text>
          <Form.Control
            aria-label="Large"
            aria-describedby="inputGroup-sizing-sm"
          />
        </InputGroup>

        <button className="m-4 p-2" onClick={fetchItems}>
          Search
        </button>

        {/* // https://legacy.reactjs.org/docs/conditional-rendering.html */}
        <div className="results d-flex flex-column justify-content-center">
          {items ? (
          <><img
              className="img-result mx-2 rounded"
              src={items.imageUrl}
              alt="the GOT character" />
              <span className="mt-4 fs-3">{items.fullName}</span></>
          ) : (
            <p> result not found</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Search;
