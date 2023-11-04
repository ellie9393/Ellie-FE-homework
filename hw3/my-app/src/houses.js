import React, { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

function Houses() {
  const url = "https://thronesapi.com/api/v2/Characters";
  const [chartData, setChartData] = useState({});

  const backgroundColors = [
    "rgba(54, 162, 235, 0.8)",
    "rgba(255, 206, 86, 0.8)",
    "rgba(255, 99, 132, 0.8)",
    "rgba(75, 192, 192, 0.8)",
    "rgba(153, 102, 255, 0.8)",
    "rgba(255, 159, 64, 0.8)",
    "rgba(199, 199, 199, 0.8)",
    "rgba(83, 102, 255, 0.8)",
    "rgba(40, 159, 64, 0.8)",
    "rgba(210, 199, 199, 0.8)",
    "rgba(78, 52, 199, 0.8)",
  ];

  const borderColors = [
    "rgba(54, 162, 235, 1)",
    "rgba(255, 206, 86, 1)",
    "rgba(255, 99, 132, 1)",
    "rgba(75, 192, 192, 1)",
    "rgba(153, 102, 255, 1)",
    "rgba(255, 159, 64, 1)",
    "rgba(159, 159, 159, 1)",
    "rgba(83, 102, 255, 1)",
    "rgba(40, 159, 64, 1)",
    "rgba(210, 199, 199, 1)",
    "rgba(78, 52, 199, 1)",
  ];

  const correctedFamily = (name) => {
    name = name.toLowerCase();
    if (name.startsWith("house")) {
      let n = name.split(" ");
      name = n[1];
    }
    if (name === "lanister") {
      name = "lannister";
    }
    if (name === "targaryan") {
      name = "targaryen";
    }
    if (name === "unknown" || name === "none") {
      name = "unknown";
    }
    if (name === "lorathi") {
      name = "lorath";
    }

    return name;
  };

  const processCharacterData = (data) => {
    const counts = {};
    data.forEach((character) => {
      if (character.family) {
        const family = correctedFamily(character.family);

        if (counts[family]) {
          counts[family] += 1;
        } else {
          counts[family] = 1;
        }
      } else {
        // Skipping
      }
    });
    console.log(counts);
    return counts;
  };

  const group = (allhouses) => {
    const groupfamilies = {};
    groupfamilies["minorities"] = 0;

    Object.entries(allhouses).forEach(([family, count]) => {
      if (count >= 3) {
        groupfamilies[family] = count;
      } else {
        groupfamilies["minorities"] += count;
      }
    });
    console.log(groupfamilies);
    return groupfamilies;
  };

  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      const counts = processCharacterData(data);
      const grouphouses = group(counts);
      setChartData(grouphouses);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, []);

  return (
    <div className="px-4 py-4 my-4 text-center d-flex flex-column justify-content-center">
      <h1 className="display-5 fw-bold">Houses</h1>
      {chartData ? (
        <Doughnut
          className="w-50 h-50"
          data={{
            labels: Object.keys(chartData),
            datasets: [
              {
                label: "characters's families",
                data: Object.values(chartData),
                backgroundColor: backgroundColors,
                borderColor: borderColors,
                borderWidth: 1,
              },
            ],
          }}
        />
      ) : (
        <p> not found</p>
      )}
    </div>
  );
}

export default Houses;
