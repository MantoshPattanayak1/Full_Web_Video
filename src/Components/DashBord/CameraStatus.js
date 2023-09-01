import React from "react";
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import NoPhotographyIcon from '@mui/icons-material/NoPhotography';
import { useTheme } from "../Utills/Themeconatext";

const data = [
  { name: 'Online', value: 400 },
  { name: 'Offline', value: 300 },
];

const COLORS = ['#0088FE', '#00C49F'];

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

const Camerastatus = () => {
  const { IsDarkMode } = useTheme();
  return (
    <>
  
      <div className=     {` m-3 grid grid-cols-1 shadow-lg bg-slate-200 ${IsDarkMode ? "dark-mode" : ""}`}>
        <div className="flex justify-center  ">
           <div className=   {` bg-slate-300 h-20 w-28 m-2 shadow-lg ${IsDarkMode ? "dark-mode" : ""}`}>
              <h1 className="flex justify-center font-bold ">Online</h1>
              <h1 className="flex justify-center ">{<CameraAltIcon/>}</h1>
              <h1 className="flex justify-center font-bold ">110</h1>

           </div>
            <div className= {`m-2 bg-slate-300 h-20 w-28 shadow-lg ${IsDarkMode ? "dark-mode" : ""}`}>
                 <h1 className="flex justify-center font-bold ">Offline</h1>
              
                 <h1 className="flex justify-center font-bold ">{<NoPhotographyIcon/>}</h1>
                 <h1 className="flex justify-center font-bold ">230</h1>
            </div>
            </div>
        <div className="flex items-center justify-center w-72 h-24    relative">
           
          <PieChart width={160} height={160}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
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
            <Tooltip contentStyle={{ backgroundColor: 'grey' }} />
          </PieChart>
        </div>
      </div>
    </>
  );
};

export default Camerastatus;
