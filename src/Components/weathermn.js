/* eslint-disable react-hooks/rules-of-hooks */

import { PieChart, Pie, Cell, Tooltip} from 'recharts';
import { useTheme } from "./Utills/Themeconatext";

const data = [
  { name: 'Group A', value: 400 },

];
const COLORS = [ '#00C49F'];
const COLORS1 = ['#FFBB28'];
const COLORS2 = [ '#FF8042'];
const COLORS3 = ['#0088FE'];
const COLORS4 = ['grey'];
const weathervalue = () => {
  const { IsDarkMode } = useTheme();
    return (
        <>
       
        <div className={`m-2 h-24 shadow-lg bg-slate-200   ${IsDarkMode ? "dark-mode" : ""}`}> 
          <h1 className="font-semibold ">Status by Units</h1>
       <div className="flex justify-between">
       <div>
           <PieChart width={150} height={50} >
           <Pie
          data={data}
            cx={100}
          cy={40}
          startAngle={180}
          endAngle={0}
          innerRadius={30}
          outerRadius={45}
          fill="#8884d8"
        //   paddingAngle={5}
        
          dataKey="value"
        >
            
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
      <p className='flex justify-center  font-semibold'>PM-2.0</p>
      </div>
             <div >
             <PieChart width={150} height={50} >
           <Pie
          data={data}
            cx={100}
          cy={40}
          startAngle={180}
          endAngle={0}
          innerRadius={30}
          outerRadius={45}
          fill="#8884d8"
        //   paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS1[index % COLORS1.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
         <p className='flex justify-center  font-semibold'>PM-1.0</p>
             </div>
             <div >
             <PieChart width={150} height={50} >
           <Pie
          data={data}
            cx={100}
          cy={40}
          startAngle={180}
          endAngle={0}
          innerRadius={30}
          outerRadius={45}
          fill="#8884d8"
        //   paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS2[index % COLORS2.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
      <p className='flex justify-center font-semibold'>PM-1.0</p>
             </div>
             <div >
             <PieChart width={150} height={50} >
           <Pie
          data={data}
            cx={100}
          cy={40}
          startAngle={180}
          endAngle={0}
          innerRadius={30}
          outerRadius={45}
          fill="#8884d8"
        //   paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS3[index % COLORS3.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
      <p className='flex justify-center  font-semibold'>Co2</p>
             </div>  
             <div >
             <PieChart width={150} height={50} >
           <Pie
          data={data}
            cx={100}
          cy={40}
          startAngle={180}
          endAngle={0}
          innerRadius={30}
          outerRadius={45}
          fill="#8884d8"
        //   paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
      <p className='flex justify-center  font-semibold '>O3</p>
             </div>
             <div className='overflow-x-hidden overflow-y-hidden'>
             <PieChart width={150} height={50} >
           <Pie
          data={data}
            cx={100}
          cy={40}
          startAngle={180}
          endAngle={0}
          innerRadius={30}
          outerRadius={45}
          fill="#8884d8"
        //   paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS4[index % COLORS4.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
      <p className='flex justify-center  font-semibold'>So2</p>
             </div>
         </div>
       </div>
           
         </>

    );
};
export default weathervalue;