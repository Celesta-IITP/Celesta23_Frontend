import React, { useState, useEffect } from "react";
import "./Leaderboard.css";

function Leaderboard(show) {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(
      "https://script.google.com/macros/s/AKfycbxSKOx6MYR-ofzQE2ufigtsLKUj67T0X2l2t60Hmxb2StDSpeZR9MqZtOQitjGp_iUpjw/exec"
    ).then((res) => {
      res.json().then((value) => {
        setData(value);
      });
    });
  }, []);
  function DisplayData(data) {
    data.map((row) => {
      return (
        <tr className="leader-row">
          <td className="column-data">{row.name}</td>
          <td className="column-data">{row.points}</td>
          <td className="column-data">{row.id}</td>
        </tr>
      );
    });
  }
  return (
    <div className="leaderboard-container">
      <h2 className="leader-header">Leaderboard</h2>
      <div>
        <table className="leader-table">
          <thead>
            <tr className="leader-row header-row">
              <th className="leader-column-header">Name</th>
              <th className="leader-column-header">Points</th>
              <th className="leader-column-header">Celesta ID</th>
            </tr>
          </thead>
          <tbody>
            <tr className="leader-row">
              <td className="column-data">some name</td>
              <td className="column-data">some points</td>
              <td className="column-data">some id</td>
            </tr>
            <tr className="leader-row">
              <td className="column-data">some name</td>
              <td className="column-data">some points</td>
              <td className="column-data">some id</td>
            </tr>
            <tr className="leader-row">
              <td className="column-data">some name</td>
              <td className="column-data">some points</td>
              <td className="column-data">some id</td>
            </tr>
          </tbody>
          {/* <tbody>{DisplayData(data)}</tbody> */}
        </table>
      </div>
    </div>
  );
}

export default Leaderboard;
