import { PieChart, Pie, Cell } from "recharts";

const data = [
  { name: "Google", value: 6, color: "#6366f1" },
  { name: "Spotify", value: 4, color: "#22c55e" },
  { name: "Airbnb", value: 3, color: "#ef4444" },
  { name: "Microsoft", value: 2, color: "#f97316" },
  { name: "Others", value: 13, color: "#fbbf24" },
];

export default function DonutChart() {
  return (
    <PieChart width={250} height={250}>
      <Pie
        data={data}
        innerRadius={60}   // 🔥 donut effect
        outerRadius={90}
        paddingAngle={3}
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={index} fill={entry.color} />
        ))}
      </Pie>
    </PieChart>
  );
}

export function Legend() {

  return (

   <div>
  {data.map((item) => (
    <div key={item.name} style={{ display: "flex", gap: "8px", alignItems: "center" }}>
      <div style={{
        width: "10px",
        height: "10px",
        background: item.color,
        borderRadius: "50%"
      }}></div>

      <span>{item.name} ({item.value})</span>
    </div>
  ))}
</div>

)  
}