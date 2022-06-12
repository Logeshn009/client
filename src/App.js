import "./App.css";
import axios, { Axios } from "axios";
// import React from "react";
import React, { useState } from "react";
function App() {
  // here const [var-name, function-name] = useState("")
  const [name, setName] = useState("");
  const [age, setAge] = useState("0");
  const [country, setCountry] = useState("");
  const [position, setPosition] = useState("");
  const [salary, setSalary] = useState("0");

  const addemployee = () => {
    console.log(name);
    Axios.post("http://localhost:3001/create", {
      name: name,
      age: age,
      country: country,
      position: position,
      salary: salary,
    }).then(() => {
      console.log("success");
    });
  };

  // const displayInfo = () => {
  //   console.log(name + age + country + position + salary);
  // };
  return (
    <div className="App">
      <div className="information">
        <label>Name: </label>
        <input
          type="text"
          value={name}
          name="name"
          onChange={(e) => setName(e.target.value)}
        ></input>
        <label>Age: </label>
        <input
          type="number"
          value={age}
          name="age"
          onChange={(e) => setAge(e.target.value)}
        ></input>
        <label>Country: </label>
        <input
          type="text"
          value={country}
          name="country"
          onChange={(e) => setCountry(e.target.value)}
        ></input>
        <label>Position: </label>
        <input
          type="text"
          value={position}
          name="position"
          onChange={(e) => setPosition(e.target.value)}
        ></input>
        <label>Salary: </label>
        <input
          type="number"
          value={salary}
          name="salary"
          onChange={(e) => setSalary(e.target.value)}
        ></input>
        <button onClick={addemployee}>Add Employee</button>
      </div>
    </div>
  );
}

export default App;
