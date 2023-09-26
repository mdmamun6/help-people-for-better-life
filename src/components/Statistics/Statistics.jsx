import { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import { getStoreDonations } from "../../Utility/LocalStorage";
import ColorBar from "../ColorBar/ColorBar";

const COLORS = ["#FF444A", "#00C49F"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN); 
  const y = cy + radius * Math.sin(-midAngle * RADIAN); 

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default function Statistics() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('donation.json');
        const alldata = await response.json();

        const totalDonations = alldata.length; 
        const storedDonationId = getStoreDonations();
        const donatedIds = storedDonationId.length; 

        setData([
          { name: "Total Donation", value: totalDonations -donatedIds },
          { name: "Your Donation", value: donatedIds },
        ]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const titlesAndColors = [
    { title: "Total Donation", color: COLORS[0] },
    { title: "Your Donation", color: COLORS[1] },
  ];

  const totalValue = data.reduce((acc, entry) => acc + entry.value, 0);
  const percentageData = data.map(entry => ({
    ...entry,
    percentage: ((entry.value / totalValue) * 100).toFixed(2),
  }));

  const chartSize = window.innerWidth > 768 ? 400 : 300;
  const chartCx = chartSize / 2;
  const chartCy = chartSize / 2;

  return (
    <div className="text-center mx-auto w-[90%] md:w-[80%]">
      <PieChart width={chartSize} height={chartSize} className="inline-block">
        <Pie
          data={percentageData}
          cx={chartCx}
          cy={chartCy}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={chartSize > 300 ? 80 : 60}
          fill="#8884d8"
          dataKey="value"
        >
          {percentageData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
          {percentageData.map((entry, index) => (
            <text
              key={`label-${index}`}
              x={chartCx}
              y={chartCy}
              dy={-10}
              textAnchor="middle"
              fill="white"
            >
              {`${entry.name} (${entry.percentage}%)`}
            </text>
          ))}
        </Pie>
      </PieChart>
      <ColorBar titlesAndColors={titlesAndColors}></ColorBar>
    </div>
  );
}
