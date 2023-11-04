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

// url for the Thrones API
const url = "https://thronesapi.com/api/v2/Characters";

const fetchData = (url) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};

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
  if (name === "unkown" || name === "none") {
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

const renderChart = (grouphouses) => {
  const donutChart = document.querySelector(".donut-chart");

  new Chart(donutChart, {
    type: "doughnut",
    data: {
      labels: Object.keys(grouphouses), // Use family names as labels
      datasets: [
        {
          label: "My First Dataset",
          data: Object.values(grouphouses), // Use counts as data
          backgroundColor: backgroundColors,
          borderColor: borderColors,
          borderWidth: 1,
        },
      ],
    },
  });
};

fetchData(url)
  .then((data) => {
    const counts = processCharacterData(data);
    const grouphouses = group(counts);
    renderChart(grouphouses);
  })
  .catch((error) => {
    console.error(error);
  });
