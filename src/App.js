import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import Papa from "papaparse";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    Papa.parse("/data.csv", {
      download: true,
      header: true,
      complete: (googleData) => {
        setData(googleData.data);
      },
    });
  }, []);

  return (
    <DataTable
      title="CSV Data"
      data={data}
      columns={
        data[0]
          ? Object.keys(data[0]).map((key) => ({ name: key, selector: key }))
          : []
      }
      pagination
    />
  );
};

export default App;
