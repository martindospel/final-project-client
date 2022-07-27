import React, { useState } from "react";
import { Chart } from "primereact/chart";
import "./Statistics.css";

function Statistics() {
  const mockData = {
    totalStudentCount: 30,
    averagePresenceRate: 91,
    averageGoodPerfRate: 89,
    averageGoodBehaveRate: 88,
    presenceRateWeekly: [65, 59, 80, 81, 56, 55, 40],
    goodPerfRateWeekly: [28, 48, 40, 19, 86, 27, 90],
    goodBehaveRateWeekly: [28, 48, 40, 19, 86, 27, 90],
  };

  const [basicData] = useState({
    labels: Array(12)
      .fill(null)
      .map((_, i) => `Week ${i + 1}`),
    datasets: [
      {
        label: "Presence Rate",
        backgroundColor: "#42A5F5",
        data: mockData.presenceRateWeekly,
      },
      {
        label: "Good Performance Rate",
        backgroundColor: "#FFA726",
        data: mockData.goodPerfRateWeekly,
      },
      {
        label: "Good Behaviour Rate",
        backgroundColor: "#0fba0f",
        data: mockData.goodBehaveRateWeekly,
      },
    ],
  });
  let basicOptions = {
    maintainAspectRatio: false,
    aspectRatio: 0.8,
    plugins: {
      legend: {
        labels: {
          color: "#495057",
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#495057",
        },
        grid: {
          color: "#ebedef",
        },
      },
      y: {
        ticks: {
          color: "#495057",
        },
        grid: {
          color: "#ebedef",
        },
      },
    },
  };
  return (
    <div className="statistics-page">
      <div className="overview-chart">
        <h2>Overview</h2>
        <div className="overview-stats">
          <div>
            <p>Total number of students:</p>
            <p>{mockData.totalStudentCount}</p>
          </div>
          <div>
            <p>Average Class Presence Rate</p>
            <p>{mockData.averagePresenceRate}</p>
          </div>
          <div>
            <p>Average Class Good Performance Rate</p>
            <p>{mockData.averageGoodPerfRate}</p>
          </div>
          <div>
            <p>Average Class Good Behaviour Rate</p>
            <p>{mockData.averageGoodBehaveRate}</p>
          </div>
        </div>
        <Chart type="bar" data={basicData} options={basicOptions} />
      </div>
    </div>
  );
}

export default Statistics;
