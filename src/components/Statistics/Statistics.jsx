import { useEffect, useState } from "react";
import { PieChart, Pie, Cell } from "recharts";
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

        const alreadyDonate = [];
        const storedDonationId = getStoreDonations();
        if (alldata.length > 0) {
          for (const id of storedDonationId) {
            const donation = alldata.find(donation => donation.id === id);
            if (donation) {
              alreadyDonate.push(donation);
            }
          }
        }

        const totalDonations = alldata.reduce((acc, donation) => acc + donation.id, 0);
        const donateevalue = alreadyDonate.reduce((acc, donation) => acc + donation.id, 0);
        setData([
          { name: "Donated", value: totalDonations },
          { name: "Not Donated", value: donateevalue },
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

  return (
    <div className="text-center mx-auto w-[90%] md:w-[80%]">
      <PieChart width={400} height={400} className="inline-block">
        <Pie
          data={data}
          cx={200}
          cy={200}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
      <ColorBar  titlesAndColors={titlesAndColors}></ColorBar>
    </div>

  );
}
