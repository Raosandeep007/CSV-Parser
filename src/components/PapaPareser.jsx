import React, { useState } from "react";
import Papa from "papaparse";

export const PapaPareser = () => {
  const [file, setFile] = useState();

  const handleFileRead = () => {
    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        console.log("Finished:", results.data);
      },
    });
  };

  const handleFile = (e) => {
    const f = e.target.files[0];
    setFile(f);
  };
  return (
    <div>
      <input type="file" onChange={handleFile} />
      <button onClick={handleFileRead}>read</button>
    </div>
  );
};
