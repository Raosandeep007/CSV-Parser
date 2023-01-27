import React, { useState } from "react";
import Papa from "papaparse";
import { KeyGenerator } from "../utils/KeyGenerator.ts";

export const PapaPareser = () => {
  const [file, setFile] = useState();
  const [fileData, setFileData] = useState([]);
  const [header, setHeader] = useState([]);

  const handleFileRead = () => {
    Papa.parse(file, {
      complete: function (results) {
        setFileData(results.data);
        const title = Object.entries(results.data?.[0]);
        setHeader(title.flat());
        const values = results.data.map((data) => {
          const row = Object.entries(data);
          return row.flat();
        });
        setFileData(values);
      },
    });
  };

  const handleFile = (e) => {
    const f = e.target.files[0];
    setFile(f);
  };

  const keys = KeyGenerator();

  return (
    <div>
      <input type="file" onChange={handleFile} />
      <button onClick={handleFileRead}>read</button>

      <table>
        <thead>
          <th>
            {header.map((ele) => {
              console.log("keys:", keys.next());
              return <td key={keys}>{ele}</td>;
            })}
          </th>
        </thead>
        <tbody>
          <td>
            {fileData.map((ele) => {
              console.log("keys:", keys.next());
              return <tr key={keys}>{ele}</tr>;
            })}
          </td>
        </tbody>
      </table>
    </div>
  );
};
