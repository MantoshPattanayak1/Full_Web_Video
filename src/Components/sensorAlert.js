
import React from "react";
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import { useTheme } from "./Utills/Themeconatext";


const data = [
  { name: 'online', value: 400 },
  { name: 'Offline', value: 300 },
  { name: 'online', value: 400 },
  { name: 'Offline', value: 300 },
  { name: 'Offline', value: 300 },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'rgb(136, 132, 216)'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};


const sensorAlert = () => {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { IsDarkMode } = useTheme();

    return (
      <div className= {`h-44  w-64  shadow-lg   bg-slate-200 sensor rounded-3xl ${IsDarkMode ? "dark-mode" : ""}`} >
       <p className="flex justify-center font-semibold ">sensor Chart</p>
      <div className="flex items-center justify-center "> {/* Added flex and items-center */}
         
        <PieChart width={150} height={150}>
          <Pie
        
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={75} // Adjust outerRadius to control the size
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip contentStyle={{backgroundColor:'grey'}}/>
         
        </PieChart>
        </div>
        </div>
    )
};


export default sensorAlert;