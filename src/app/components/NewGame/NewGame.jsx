"use client";

import Link from "next/link";
import { useState } from "react";

export default function NewGame() {
  const [inputName, setInputName] = useState("");
  const [savedData, setSavedData] = useState(false);

  const handleInputChange = (e) => {
    const name = e.target.value;
    setInputName(name);
  };

  const saveName = () => {
    localStorage.setItem("name", inputName);
    setSavedData(true);
  };

  return (
    <div>
      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">
          Nombre
        </label>
        <input
          type="text"
          className="form-control"
          placeholder="Ingrese su nombre"
          aria-label="name"
          aria-describedby="Name"
          onChange={handleInputChange}
        />
      </div>

      <fieldset disabled={inputName.length <= 0 && "disabled"}>
        <button className="btn btn-dark w-100" onClick={saveName}>
          Guardar
        </button>
      </fieldset>

      {savedData && (
        <Link href="/gameBoard" className="btn btn-success mt-3 w-100">
          ¡Comenzar el juego!
        </Link>
      )}
    </div>
  );
}
