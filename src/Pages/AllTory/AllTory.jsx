import React, { useEffect, useState } from "react";
import Tory from "./Tory/Tory";
import { useLoaderData } from "react-router-dom";

const AllTory = () => {
  const torys = useLoaderData();
  //   const [torys, setTorys] = useState();

  //   useEffect(() => {
  //     fetch("http://localhost:8000/allTory")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setTorys(data);
  //       });
  //   }, []);
  return (
    <div>
      <h2>all tory</h2>

      {torys.map((tory) => (
        <Tory tory={tory}></Tory>
      ))}
    </div>
  );
};

export default AllTory;
