import { useState } from "react";
import { useRecoilState } from "recoil";
import { listState } from "../store/List";
import Input from "./shared/Input";
import html from "../data/html.json";

export default function Form() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [, setList] = useRecoilState(listState);

  function handleAdd() {
    if ((name === "") | (price === "") | (name.length < 3)) {
      alert("Name can't be empty or less than 3 characters.");
    } else if ((price <= 0) | (price === "")) {
      alert("Price can't  be 0, negative nor empty.");
    } else {
      Add();
    }
  }

  function Add() {
    setList((prev) => {
      let temp = [
        { key: Math.random(), name: name, price: price, isFinished: false },
        ...prev,
      ];
      return temp;
    });
    setName("");
    setPrice("");
  }
  function handleEnter(event) {
    if (event.key === "Enter") {
      Add();
    }
  }
  return (
    <>
      <div className="labels form-row">
        <label className="col">Name</label>
        <label className="col">Price</label>
        <label className="col"></label>
      </div>
      <div className="input" onKeyPress={(event) => handleEnter(event)}>
        <Input state={name} setState={setName} html={html.name} />
        <Input state={price} setState={setPrice} html={html.price} />
        <button onClick={() => handleAdd()} className="button" type="button">
          Add
        </button>
      </div>
    </>
  );
}
