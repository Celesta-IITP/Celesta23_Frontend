import React, { useState, useEffect } from "react";
import "./Leaderboard.css";

function Leaderboard(show) {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(
      "https://script.google.com/macros/s/AKfycby1yHmlQIfqI2fdWkfc0n-H1ujqekS6v5H9trWoX_TSYXsjC2A6kyJKLq8YPHHriWMHpw/exec"
    ).then((res) => {
      res.json().then((value) => {
        setData(value);
      });
    });
  }, []);
  
  return (
    <>
      
      <div className="LeaderTable">
      <table className="leader-table">
          <thead className="table-titles">
            <tr className="header-row">
              <th className="leader-column-header">Rank</th>
              <th className="leader-column-header">Name</th>
              <th className="leader-column-header">Points</th>
              <th className="leader-column-header">Celesta ID</th>
            </tr>
          </thead>
          <tbody className="table-data">
            {/*<tr className="leader-row">
              <td className="rank-data" >10</td>
              <td className="name-data">Aman Shekhar Kumar Singh</td>
              <td className="points-data">1428</td>
              <td className="celestaid-data">CLST40180</td>
            </tr>
            <tr className="leader-row">
              <td className="rank-data" >10</td>
              <td className="name-data">Aman Shekhar Kumar Singh</td>
              <td className="points-data">1428</td>
              <td className="celestaid-data">CLST40180</td>
            </tr>
            <tr className="leader-row">
              <td className="rank-data" >10</td>
              <td className="name-data">Aman Shekhar Kumar Singh</td>
              <td className="points-data">1428</td>
              <td className="celestaid-data">CLST40180</td>
            </tr>
            <tr className="leader-row">
              <td className="rank-data" >10</td>
              <td className="name-data">Aman Shekhar Kumar Singh</td>
              <td className="points-data">1428</td>
              <td className="celestaid-data">CLST40180</td>
            </tr>
            <tr className="leader-row">
              <td className="rank-data" >10</td>
              <td className="name-data">Aman Shekhar Kumar Singh</td>
              <td className="points-data">1428</td>
              <td className="celestaid-data">CLST40180</td>
            </tr>
            <tr className="leader-row">
              <td className="rank-data" >10</td>
              <td className="name-data">Aman Shekhar Kumar Singh</td>
              <td className="points-data">1428</td>
              <td className="celestaid-data">CLST40180</td>
            </tr>
            <tr className="leader-row">
              <td className="rank-data" >10</td>
              <td className="name-data">Aman Shekhar Kumar Singh</td>
              <td className="points-data">1428</td>
              <td className="celestaid-data">CLST40180</td>
            </tr>
            <tr className="leader-row">
              <td className="rank-data" >10</td>
              <td className="name-data">Aman Shekhar Kumar Singh</td>
              <td className="points-data">1428</td>
              <td className="celestaid-data">CLST40180</td>
            </tr>
            <tr className="leader-row">
              <td className="rank-data" >10</td>
              <td className="name-data">Aman Shekhar Kumar Singh</td>
              <td className="points-data">1428</td>
              <td className="celestaid-data">CLST40180</td>
            </tr>
            <tr className="leader-row">
              <td className="rank-data" >10</td>
              <td className="name-data">Aman Shekhar Kumar Singh</td>
              <td className="points-data">1428</td>
              <td className="celestaid-data">CLST40180</td>
  </tr>*/}
            {data.map((row) => {
      return (
        <tr className="leader-row">
          <td className="rank-data" >{data.indexOf(row)+1}</td>
          <td className="name-data">{row.name}</td>
          <td className="points-data">{row.Points}</td>
          <td className="celestaid-data">{row.celestaId}</td>
        </tr>
      );
    })}
          </tbody>
          {/* <tbody>{DisplayData(data)}</tbody> */}
        </table>
      </div>
        
      
    </>
      
  );
}

export default Leaderboard;
