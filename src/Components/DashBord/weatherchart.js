/* eslint-disable react-hooks/rules-of-hooks */
import { ResponsiveContainer, LineChart,Line, XAxis, YAxis, CartesianGrid , Legend, Tooltip} from "recharts";

import { useTheme } from "../Utills/Themeconatext";
const pdata = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      zx:600,
  
      
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      zx:900,
 
     
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      zx:100,
  
   
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      zx:700,
  
  
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      zx:500,
  
 
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      zx:200,
    
 
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      zx:400,
     
   
    },
  ];




const weatherchart = () => {
  const { IsDarkMode } = useTheme();

    return (

        <div className= {`chart w-96  m-3 shadow-lg bg-slate-200  ${IsDarkMode ? "dark-mode" : ""}`}>
          <ResponsiveContainer width="100%" aspect={1.5}>
            <LineChart data={pdata} width={200} height={300} margin={{
                top: 5, right: 30, left: 20, bottom:5
            }}>
                <CartesianGrid  strokeDasharray="5 5"/>
                <XAxis dataKey="name" interval={'preserveStartEnd'} />
                <Line  type="monotone" dataKey="uv" stroke="red"  activeDot={{r: 8}}/>
                <Line type="monotone" dataKey="pv" stroke="blue" activeDot={{r:8}}/>
                <Line type="monotone" dataKey="zx" stroke="green" activeDot={{r:8}}/>
               
                <YAxis/>
                <Tooltip contentStyle={{backgroundColor:'grey'}}/>
                <Legend />
            </LineChart>
           
          </ResponsiveContainer>
        </div>
    )
};
export default weatherchart;
