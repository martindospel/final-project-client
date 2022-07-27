import React, { useState, useEffect } from "react";
import { Chart } from "primereact/chart";
import { useSelector, useDispatch } from "react-redux";
import "./Statistics.css";

function Statistics() {
  const dispatch = useDispatch();
  const statistics = useSelector((store) => store.class.currentClassStats);
  const classUuid = useSelector((store) => store.class.currentClass?.uuid);

  const [basicData, setBasicData] = useState({});

  useEffect(() => {
    if (statistics) {
      setBasicData({
        labels: Array(12)
          .fill(null)
          .map((_, i) => `Week ${i + 1}`),
        datasets: [
          {
            label: "Presence Rate",
            backgroundColor: "#42A5F5",
            data: statistics?.presenceRateWeekly,
          },
          {
            label: "Good Performance Rate",
            backgroundColor: "#FFA726",
            data: statistics?.goodPerfRateWeekly,
          },
          {
            label: "Good Behaviour Rate",
            backgroundColor: "#0fba0f",
            data: statistics?.goodBehaveRateWeekly,
          },
        ],
      });
    }
  }, [statistics, classUuid, dispatch]);

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
            <p>{statistics?.totalStudentCount ?? "0"}</p>
          </div>
          <div>
            <p>Average Class Presence Rate</p>
            <p>{statistics?.averagePresenceRate ?? "0"}%</p>
          </div>
          <div>
            <p>Average Class Good Performance Rate</p>
            <p>{statistics?.averageGoodPerfRate ?? "0"}%</p>
          </div>
          <div>
            <p>Average Class Good Behaviour Rate</p>
            <p>{statistics?.averageGoodBehaveRate ?? "0"}%</p>
          </div>
        </div>
        <Chart type="bar" data={basicData} options={basicOptions} />
      </div>
    </div>
  );
}

export default Statistics;
